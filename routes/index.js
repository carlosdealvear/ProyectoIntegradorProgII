var express = require("express");
var router = express.Router();
var controller = require("../controllers/indexController");

/* GET home page. */
router.get("/index", controller.mostrarIndex);
router.get("/resultadoBusqueda", controller.mostrarResultadoBusqueda);

module.exports = router;