// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("  ")[1]; // Assuming 'Bearer TOKEN_STRING'
    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }

      req.user = user; // Add the user to the request object
      next();
    });
  } else {
    res.sendStatus(401); // No token provided
  }
};

module.exports = authenticateJWT;
