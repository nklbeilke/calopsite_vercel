import express from "express";
import cors from "cors";
import dotenv from "dotenv";
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