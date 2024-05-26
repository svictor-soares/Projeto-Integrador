/*
* Curso de Engenharia de Software - UniEVANGÉLICA
* Disciplina de Programação Web
* Dev: Otavio Lemes de Oliveira
* DATA 26/05/2024
*/
const express = require('express');
const routes = require('./routes/routes');
const db = require('./db');

const app = express();

// Middleware para processar corpo das requisições JSON
app.use(express.json());

// Middleware para registrar as rotas
app.use('/', routes);

// Middleware para tratar erros de rota não encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Middleware para tratar erros globais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
