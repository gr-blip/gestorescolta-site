const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Rota inexistente = 404 de verdade (o Google nao indexa lixo como se fosse a home)
app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html><meta charset="utf-8"><title>Página não encontrada | Gestor Escolta</title><p style="font-family:sans-serif;padding:40px">Página não encontrada. <a href="/">Voltar para o Gestor Escolta</a></p>');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
