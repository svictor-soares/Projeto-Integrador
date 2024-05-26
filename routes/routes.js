// routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);

// Outras rotas para produtos, ordens, etc...

module.exports = router;
