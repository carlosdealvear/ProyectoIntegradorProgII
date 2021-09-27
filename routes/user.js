var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/', usersController.mostrarRegister);
router.get('/:username', usersController.mostrarDetalleUsuario);
router.get('/', usersController.mostrarLogin);
router.get('/', usersController.mostrarMiPerfil);
router.get('/', usersController.mostrarEditarPerfil);

module.exports = router;