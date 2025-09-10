const express = require("express");

const app = express();

// Rota básica
app.get("/", (req, res) => {
  res.json({ message: "Olá do Express!" });
});

// Rota de saúde simples
app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3000;

function start(port = PORT) {
  const server = app.listen(port, () => {
    console.log(`Servidor ouvindo em http://localhost:${port}`);
  });
  return server;
}

module.exports = { app, start };

// Executa o servidor apenas quando chamado diretamente
if (require.main === module) {
  start();
}

