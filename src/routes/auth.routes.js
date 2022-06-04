const router = require('express').Router();
const Controller = require('../controllers/auth.controller');
const Middleware = require('../middlewares/auth.middleware');

router.post('/login', Middleware.login, Controller.login);

module.exports = router;