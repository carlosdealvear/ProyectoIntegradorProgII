var express = require("express");
let postController = require("../controllers/postController");
var router = express.Router();

router.get("/agregarPost", postController.mostrarAgregarPost);
router.get("/detallePost/id/:id", postController.mostrarDetallePost);

module.exports = router;