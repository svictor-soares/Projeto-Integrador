// userController.js
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Outros controladores para autenticação
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.authenticateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Procura o usuário no banco de dados
    const user = await User.findOne({ username });
    // Se o usuário não existe, retorna erro
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Verifica se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // Gera um token JWT
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  // userController.js

  // Importe a função `redirect` do Express para redirecionar o usuário
  const { redirect } = require('express');

  exports.authenticateUser = async (req, res) => {
    try {
  // Se a autenticação for bem-sucedida, redirecione para a página de cursos
    return redirect('/courses');
    } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

};

