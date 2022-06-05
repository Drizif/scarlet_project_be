const router = require('express').Router();
const Controller = require('../controllers/permission.controller');
const Middleware = require('../middlewares/permission.middleware');

router.post('/permission', Middleware.createPermission, Controller.createPermission);

module.exports = router;