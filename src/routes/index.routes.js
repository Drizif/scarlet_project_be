const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');
const { error } = require('../middlewares/error.middleware');

const routes = express();

routes.use(
  verifyApiKey,
  require('./user.routes'),
  error
);

module.exports = routes;
