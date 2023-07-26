import express from "express";
import { alunos } from "./alunos.js";

const app = express();
app.use(express.json());

// Listar todos os alunos
app.get("/alunos", (req, res) => {
  res.status(200).send({
    ok: true,
    mensagem: "A listagem foi feita com sucesso",
    dados: alunos,
  });
});

// Criar um novo aluno na lista de alunos
app.post("/alunos", (req, res) => {
  const dados = req.body;

  if (!dados.idade) {
    return res.status(400).send({
      ok: false,
      mensagem: "Idade não foi informada",
    });
  }

  if (!dados.nome) {
    return res.status(400).send({
      ok: false,
      mensagem: "Nome não foi informado",
    });
  }

  if (!dados.email) {
    return res.status(400).send({
      ok: false,
      mensagem: "E-mail não foi informado",
    });
  }

  alunos.push({
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
  });

  console.log(alunos);

  res.status(201).send({
    ok: true,
    mensagem: "Usuário criado com sucesso",
    dados: alunos,
  });
});

app.listen(3000, () => {
  console.log("API está rodando!");
});
