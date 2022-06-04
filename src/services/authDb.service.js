const bcrypt = require('bcryptjs');

const dbQuery = require('../config/pg');
const { generateJWT } = require('../utils/jwt.util');



class AuthDBService {
  async login(email, password) {
    try {
      const { query } = await dbQuery(`SELECT * FROM login_user_fn($1::VARCHAR) as query`, [email]);
      const validPass = bcrypt.compareSync(password, query.password);
      if (!validPass)
        throw new Error('Invalid password');
      const token = await generateJWT(query.id);
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthDBService();