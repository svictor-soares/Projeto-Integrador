// routes.js

const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Rota para autenticação de usuário
router.post('/login', userController.authenticateUser);

// Rota protegida para a página de cursos
router.get('/courses', authenticateToken, (req, res) => {
  // Servir o arquivo HTML da página de cursos
  res.sendFile(__dirname + '/courses.html');
});

module.exports = router;
