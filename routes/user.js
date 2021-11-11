var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var registracionController = require('../controllers/registracionController');


router.get('/detalleUsuario/:id', usersController.mostrarDetalleUsuario);
router.get('/login', usersController.mostrarLogin);
router.get('/miPerfil', usersController.mostrarMiPerfil);
router.get('/editarPerfil', usersController.mostrarEditarPerfil);
router.get('/registracion', registracionController.registracion)
router.get('/logout', usersController.logout)

router.post('/registracion', registracionController.registrar)
router.post('/login', usersController.autenticarUsuario)

module.exports = router;