const jwt = require('jsonwebtoken');
const { server } = require('../config/vars');

const verifyJWT = async (token) => await jwt.verify(token, server.secretKey);

const generateJWT = async (id) => await jwt.sign({ id }, server.secretKey, { expiresIn: server.jwtExpiration });

module.exports = {
  generateJWT,
  verifyJWT
}