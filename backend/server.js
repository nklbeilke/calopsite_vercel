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
    mensagem: "API do Calopsite funcionando!"
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