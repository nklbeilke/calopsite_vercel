import pool from "./db.js";
import produtos from "../src/data/Produtos.js";

const NOMES_CATEGORIAS = {
  alimentacao: "Alimentação",
  habitat: "Habitat",
  enriquecimento: "Enriquecimento",
};

async function seed() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const idsCategorias = {};
    for (const [slug, nome] of Object.entries(NOMES_CATEGORIAS)) {
      const existente = await client.query(
        "SELECT id_categoria FROM categorias WHERE nome_categoria = $1",
        [nome]
      );

      if (existente.rows[0]) {
        idsCategorias[slug] = existente.rows[0].id_categoria;
        continue;
      }

      const criado = await client.query(
        "INSERT INTO categorias (nome_categoria) VALUES ($1) RETURNING id_categoria",
        [nome]
      );

      idsCategorias[slug] = criado.rows[0].id_categoria;
    }

    for (const produto of produtos) {
      await client.query(
        `INSERT INTO produtos (id_produto, id_categoria, nome_produto, descricao, preco, estoque)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id_produto) DO UPDATE SET
           id_categoria = EXCLUDED.id_categoria,
           nome_produto = EXCLUDED.nome_produto,
           descricao = EXCLUDED.descricao,
           preco = EXCLUDED.preco`,
        [
          produto.id,
          idsCategorias[produto.categoria],
          produto.nome,
          produto.descricao,
          produto.preco,
          100,
        ]
      );
    }

    await client.query(
      `SELECT setval('produtos_id_produto_seq', (SELECT COALESCE(MAX(id_produto), 0) FROM produtos) + 1, false)`
    );
    await client.query(
      `SELECT setval('categorias_id_categoria_seq', (SELECT COALESCE(MAX(id_categoria), 0) FROM categorias) + 1, false)`
    );

    await client.query("COMMIT");

    console.log(`Seed concluído: ${Object.keys(idsCategorias).length} categorias, ${produtos.length} produtos.`);
  } catch (erro) {
    await client.query("ROLLBACK");
    console.error("Erro ao popular banco:", erro.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
