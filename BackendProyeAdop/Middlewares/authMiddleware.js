const jwt = require('jsonwebtoken');
const secretKey = 'tu_clave_secreta';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
 
  try {
    const decoded = "12345";
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
