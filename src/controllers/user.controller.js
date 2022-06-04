const userDBService = require("../services/userDb.service");
const camelConverter = require("../utils/camelConverter.util");

class Controller {
  createUser = async (req, res) => {
    try {
      await userDBService.createUser(req.user);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  getUser = async (req, res) => {
    try {
      const dataAux = await userDBService.getUser(req.user.id);

      if (!dataAux)
        return res.status(200).json({
          status: true,
          message: 'User not found',
          data: req.user.id ? {} : []
        });

      const data = Array.isArray(dataAux) ? dataAux.map(e => (camelConverter(e))) : camelConverter(dataAux);

      res.status(200).json({
        status: true,
        message: "User found",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  updateUser = async (req, res) => {
    try {
      await userDBService.updateUser(req.user);

      res.status(200).json({
        status: true,
        message: "User updated successfully",
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  deleteUser = async (req, res) => {
    try {
      await userDBService.deleteUser(req.user.id);

      res.status(200).json({
        status: true,
        message: "User deleted successfully",
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }
}

module.exports = new Controller();