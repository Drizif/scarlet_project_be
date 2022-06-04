const authDbService = require("../services/authDb.service");

class Controller {
  login = async (req, res) => {
    try {
      const { email, password } = req.auth;

      const data = await authDbService.login(email, password);

      res.status(200).json({
        status: true,
        message: 'Login successful',
        data
      });
    } catch (error) {
      if (error.message === 'Invalid password')
        return res.status(401).json({
          status: false,
          message: error.message || 'Login failed',
          data: null
        });

      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }
}

module.exports = new Controller();