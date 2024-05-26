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

// Outros controladores para produtos, ordens, etc...
