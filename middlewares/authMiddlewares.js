// authMiddleware.js
const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  jwt.verify(token, 'secret_key', (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.userId = decodedToken.userId;
    next();
  });
};
