const Validator = require('../validators/security.validator');
const { verifyJWT } = require('../utils/jwt.util');

class Middleware {
  async verifyApiKey(req, res, next) {
    try {
      await Validator.verifyApiKey().validateAsync({ ...req.headers });
      next();
    } catch (error) {
      res.status(401).json({ status: false, message: 'Unauthorized, invalid x-api-key', data: null });
    }
  }

  async verifyToken(req, res, next) {
    try {
      req.token = await Validator.verifyToken().validateAsync(req.headers.token);

      await verifyJWT(req.token);
      next();
    } catch (error) {
      res.status(401).json({ status: false, message: 'Unauthorized, invalid token', data: null });
    }
  }
}

module.exports = new Middleware();
