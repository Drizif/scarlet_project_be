const dbQuery = require('../config/pg');

class PermissionDBService {
  async existsModule(idModules) {
    try {
      const { query } = await dbQuery(`SELECT * FROM exists_modules_fn($1::INTEGER[]) as query`, [
        idModules? idModules: '[]'
      ]);

      return query || [];
    } catch (error) {
      throw error;
    }
  }

  async createPermission(name, modules) {
    try {
      await dbQuery(`SELECT * FROM create_permission_fn($1::VARCHAR, $2::JSON) as query`, [
        name,
        modules ? JSON.stringify(modules) : '[]'
      ]);

    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PermissionDBService();