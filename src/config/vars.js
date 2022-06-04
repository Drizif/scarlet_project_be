require('dotenv').config()
const { boolean } = require('boolean');

module.exports = {
  server: {
    apiKeyName: process.env.API_KEY_NAME,
    apiKeyValue: process.env.API_KEY_VALUE,
    limit: process.env.LIMIT,
    port: process.env.PORT,
    cors_allowed: process.env.CORS_ALLOWED,
    timeout: parseInt(process.env.SERVER_TIMEOUT),
    extended: boolean(process.env.EXTENDED),
    secretKey: process.env.SECRET_KEY,
    jwtExpiration: process.env.JWT_EXPIRATION,
  },
  dbConstants: {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT
  }
}