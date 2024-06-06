/*
* Curso de Engenharia de Software - UniEVANGÉLICA
* Disciplina de Programação Web
* Dev: Victor Soares
* DATA 26/05/2024
*/const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
