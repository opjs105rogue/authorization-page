const Router = require('express');
const userController = require('./controllers/userController.js')

const router = new Router();

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/users',userController.getAllUsers)


module.exports = router;