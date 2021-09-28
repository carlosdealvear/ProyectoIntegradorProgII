var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/register', usersController.mostrarRegister);
router.get('/detalleUsuario/:id', usersController.mostrarDetalleUsuario);
router.get('/login', usersController.mostrarLogin);
router.get('/miPerfil', usersController.mostrarMiPerfil);
router.get('/editarPerfil', usersController.mostrarEditarPerfil);

module.exports = router;