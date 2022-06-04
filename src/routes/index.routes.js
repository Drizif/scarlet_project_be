const express = require('express');
const SecurityMiddleware = require('../middlewares/security.middleware');
const { error } = require('../middlewares/error.middleware');

const routes = express();

routes.use(
  SecurityMiddleware.verifyApiKey,
  require('./auth.routes'),
  SecurityMiddleware.verifyToken,
  require('./user.routes'),
  error
);

module.exports = routes;
