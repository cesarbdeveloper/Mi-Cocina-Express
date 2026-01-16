const usersRouter = require('express').Router();
const usersController = require('../controllers/users');

// Ruta para el registro de usuarios
usersRouter.post('/register', usersController.registerUser);

// Ruta para el inicio de sesión de usuarios
usersRouter.post('/login', usersController.loginUser);
module.exports = usersRouter;

usersRouter.post('/register', usersController.registerUser);
usersRouter.post('/login', usersController.loginUser);
module.exports = usersRouter;