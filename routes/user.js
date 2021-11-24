var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var registracionController = require('../controllers/registracionController');

router.post('/registracion', registracionController.registrar)
router.get('/registracion', registracionController.registracion)
router.get('/login', usersController.mostrarLogin);
router.post('/login', usersController.autenticarUsuario)
//
router.get('/logout', usersController.logout)
router.get('/detalleUsuario/:id', usersController.mostrarDetalleUsuario);
router.get('/miPerfil', usersController.mostrarMiPerfil);






module.exports = router;