const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const useragent = require('express-useragent');

const routes = require('../routes/index.routes');

const { server } = require('./vars');

const corsOptions = {
  origin: server.cors_allowed,
  optionsSuccessStatus: 200
}

const app = express();
app.use(useragent.express());
app.use(express.json({ limit: server.limit }));
app.use(express.urlencoded({ extended: server.extended }));
app.use(helmet());
app.use(cors(corsOptions));
app.use('/api', routes);

module.exports = app;
