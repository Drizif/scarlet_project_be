const router = require('express').Router();
const Controller = require('../controllers/user.controller');
const Middleware = require('../middlewares/user.middleware');

router.post('/user', Middleware.createUser, Controller.createUser);
router.get('/user', Middleware.getUser, Controller.getUser);
router.put('/user', Middleware.updateUser, Controller.updateUser);
router.delete('/user', Middleware.deleteUser, Controller.deleteUser);

module.exports = router;