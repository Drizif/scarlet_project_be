const Validator = require('../validators/security.validator');

class Middleware {
  async verifyApiKey(req, res, next) {
    try {
      await Validator.verifyApiKey().validateAsync({ ...req.headers });
      next();
    } catch (error) {
      res.status(401).json({ status: false, message: 'Unauthorized, invalid x-api-key', data: null });
    }
  }
}

module.exports = new Middleware();
