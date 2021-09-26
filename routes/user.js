var express = require("express");
var router = express.Router();
var controller = require("../controllers/usersController");

router.get("/register", controller.mostrarRegister);
router.get("/detalleUsuario/:username", controller.mostrarDetalleUsuario);
router.get("/login", controller.mostrarLogin);
router.get("/miPerfil", controller.mostrarMiPerfil);
router.get("/editarPerfil", controller.mostrarEditarPerfil);

module.exports = router;