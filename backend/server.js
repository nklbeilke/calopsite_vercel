import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import pool from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Calopsite funcionando! (build-check-v2)"
  });
});

app.get("/produtos", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM produtos");

    res.json(resultado.rows);
  } catch (erro) {
    console.error("Erro ao buscar produtos:", erro.message);

    res.status(500).json({
      erro: "Erro ao buscar produtos"
    });
  }
});

app.get("/produtos/mais-vendidos", async (req, res) => {
  const limite = Number(req.query.limite) || 5;

  try {
    const resultado = await pool.query(
      `SELECT p.id_produto, COALESCE(v.total_vendido, 0) AS total_vendido
       FROM produtos p
       LEFT JOIN (
         SELECT id_produto, SUM(quantidade) AS total_vendido
         FROM itens_pedido
         GROUP BY id_produto
       ) v ON v.id_produto = p.id_produto
       ORDER BY total_vendido DESC, p.id_produto ASC
       LIMIT $1`,
      [limite]
    );

    res.json(resultado.rows);
  } catch (erro) {
    console.error("Erro ao buscar mais vendidos:", erro.message);
    res.status(500).json({ erro: "Erro ao buscar mais vendidos" });
  }
});

app.post("/usuarios", async (req, res) => {
  const { nome_usuario, email, cpf, senha, telefone } = req.body;

  if (!nome_usuario || !email || !cpf || !senha) {
    return res.status(400).json({ erro: "Nome, e-mail, CPF e senha são obrigatórios" });
  }

  const cpfDigits = String(cpf).replace(/\D/g, "");
  if (cpfDigits.length !== 11) {
    return res.status(400).json({ erro: "CPF inválido" });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const resultado = await pool.query(
      `INSERT INTO usuarios (nome_usuario, email, cpf, senha, telefone)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id_usuario, nome_usuario, email, cpf, telefone`,
      [nome_usuario, email, cpfDigits, senhaHash, telefone || null]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    if (erro.code === "23505") {
      return res.status(409).json({ erro: "Já existe um usuário com este e-mail ou CPF" });
    }

    console.error("Erro ao cadastrar usuário:", erro.message);
    res.status(500).json({ erro: "Erro ao cadastrar usuário" });
  }
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "E-mail e senha são obrigatórios" });
  }

  try {
    const resultado = await pool.query(
      "SELECT id_usuario, nome_usuario, email, cpf, senha, telefone FROM usuarios WHERE email = $1",
      [email]
    );

    const usuario = resultado.rows[0];
    if (!usuario) {
      return res.status(401).json({ erro: "E-mail ou senha inválidos" });
    }

    const senhaConfere = await bcrypt.compare(senha, usuario.senha);
    if (!senhaConfere) {
      return res.status(401).json({ erro: "E-mail ou senha inválidos" });
    }

    delete usuario.senha;
    res.json(usuario);
  } catch (erro) {
    console.error("Erro ao fazer login:", erro.message);
    res.status(500).json({ erro: "Erro ao fazer login" });
  }
});

app.get("/usuarios/:id_usuario/pedidos", async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const resultado = await pool.query(
      `SELECT
         p.id_pedido,
         p.status,
         p.valor_total,
         p.frete,
         p.forma_pagamento,
         p.parcelas,
         p.endereco,
         p.data_pedido,
         COALESCE(
           json_agg(
             json_build_object(
               'id_produto', ip.id_produto,
               'nome_produto', pr.nome_produto,
               'quantidade', ip.quantidade,
               'preco_unitario', ip.preco_unitario
             ) ORDER BY ip.id_item
           ) FILTER (WHERE ip.id_item IS NOT NULL),
           '[]'
         ) AS itens
       FROM pedidos p
       LEFT JOIN itens_pedido ip ON ip.id_pedido = p.id_pedido
       LEFT JOIN produtos pr ON pr.id_produto = ip.id_produto
       WHERE p.id_usuario = $1
       GROUP BY p.id_pedido
       ORDER BY p.data_pedido DESC`,
      [id_usuario]
    );

    res.json(resultado.rows);
  } catch (erro) {
    console.error("Erro ao buscar pedidos:", erro.message);
    res.status(500).json({ erro: "Erro ao buscar pedidos" });
  }
});

app.post("/pedidos", async (req, res) => {
  const { id_usuario, itens, endereco, forma_pagamento, frete, parcelas } = req.body;

  if (!id_usuario || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ erro: "Usuário e itens do pedido são obrigatórios" });
  }

  if (!endereco || !endereco.rua || !endereco.cidade || !endereco.estado || !endereco.cep) {
    return res.status(400).json({ erro: "Endereço de entrega incompleto" });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const idsProdutos = itens.map((item) => item.id_produto);
    const produtosResultado = await client.query(
      "SELECT id_produto, preco FROM produtos WHERE id_produto = ANY($1::int[])",
      [idsProdutos]
    );

    const precoPorProduto = new Map(
      produtosResultado.rows.map((p) => [p.id_produto, Number(p.preco)])
    );

    if (precoPorProduto.size !== new Set(idsProdutos).size) {
      throw Object.assign(new Error("Produto não encontrado"), { status: 400 });
    }

    const freteValor = Number(frete) || 0;
    let valorTotal = freteValor;

    const itensValidados = itens.map((item) => {
      const quantidade = Number(item.quantidade);
      if (!Number.isInteger(quantidade) || quantidade < 1) {
        throw Object.assign(new Error("Quantidade inválida"), { status: 400 });
      }

      const preco = precoPorProduto.get(item.id_produto);
      valorTotal += preco * quantidade;

      return { id_produto: item.id_produto, quantidade, preco_unitario: preco };
    });

    const pedidoResultado = await client.query(
      `INSERT INTO pedidos (id_usuario, valor_total, frete, forma_pagamento, parcelas, endereco)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id_pedido, status, data_pedido`,
      [
        id_usuario,
        valorTotal,
        freteValor,
        forma_pagamento || "pix",
        Number(parcelas) || 1,
        JSON.stringify(endereco),
      ]
    );

    const pedido = pedidoResultado.rows[0];

    for (const item of itensValidados) {
      await client.query(
        `INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario)
         VALUES ($1, $2, $3, $4)`,
        [pedido.id_pedido, item.id_produto, item.quantidade, item.preco_unitario]
      );
    }

    await client.query("COMMIT");

    res.status(201).json({
      id_pedido: pedido.id_pedido,
      status: pedido.status,
      data_pedido: pedido.data_pedido,
      valor_total: valorTotal,
      itens: itensValidados,
    });
  } catch (erro) {
    await client.query("ROLLBACK");

    if (erro.status) {
      return res.status(erro.status).json({ erro: erro.message });
    }

    console.error("Erro ao criar pedido:", erro.message);
    res.status(500).json({ erro: "Erro ao criar pedido" });
  } finally {
    client.release();
  }
});

const PORT = process.env.PORT || 3001;

pool.query("SELECT NOW()")
  .then((res) => {
    console.log("Banco conectado!");
    console.log("Horário do banco:", res.rows[0].now);
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:");
    console.error(err.message);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});