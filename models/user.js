/*
* Curso de Engenharia de Software - UniEVANGÉLICA
* Disciplina de Programação Web
* Dev: Victor Soares
* DATA 26/05/2024
*/// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);

// product.js e order.js seguiriam uma estrutura similar
