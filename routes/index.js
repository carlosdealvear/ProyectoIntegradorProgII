var express = require("express");
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/index", indexController.mostrarIndex);
router.get("/resultadoBusqueda", indexController.mostrarResultadoBusqueda);

module.exports = router;