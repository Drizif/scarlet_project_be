const Validator = require("../validators/auth.validator");

class Middleware {
  login = async (req, res, next) => {
    try {
      req.auth = await Validator.login().validateAsync({
        ...req.body
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new Middleware();