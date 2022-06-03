const dbQuery = require('../config/pg');

class DBService {
  async createUser(data) {
    try {
      await dbQuery(`SELECT * FROM create_user_fn($1::JSON) as query`, [data]);
    } catch (error) {
      throw error;
    }
  }

  async getUser(id) {
    try {
      const { query } = await dbQuery(`SELECT * FROM get_user_fn($1::INTEGER) as query`, [id]);
      return query;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(data) {
    try {
      await dbQuery(`SELECT * FROM update_user_fn($1::JSON) as query`, [data]);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await dbQuery(`SELECT * FROM delete_user_fn($1::INTEGER) as query`, [id]);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DBService();