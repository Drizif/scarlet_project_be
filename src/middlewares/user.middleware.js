const Validator = require("../validators/user.validator");

class Middleware {
  createUser = async (req, res, next) => {
    try {
      req.user = await Validator.createUser().validateAsync({
        ...req.body
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

  getUser = async (req, res, next) => {
    try {
      req.user = await Validator.getUser().validateAsync({
        ...req.query,
        ...req.params
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

  updateUser = async (req, res, next) => {
    try {
      req.user = await Validator.updateUser().validateAsync({
        ...req.body,
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

  deleteUser = async (req, res, next) => {
    try {
      req.user = await Validator.deleteUser().validateAsync({
        ...req.query
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }

}

module.exports = new Middleware();