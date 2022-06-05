const Validator = require('../validators/permission.validator');

class Middleware {
  createPermission = async (req, res, next) => {
    try {
      req.permission = await Validator.createPermission().validateAsync({
        ...req.body
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new Middleware();