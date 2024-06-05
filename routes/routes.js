// routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/login', userController.authenticateUser);
router.get('/protectedRoute', authenticateToken, (req, res) => {
  res.send('This route is protected');
});

module.exports = router;
