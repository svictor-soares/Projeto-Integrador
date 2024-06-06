/*
* Curso de Engenharia de Software - UniEVANGÉLICA
* Disciplina de Programação Web
* Dev: Victor Soares
* DATA 26/05/2024
*/const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);


