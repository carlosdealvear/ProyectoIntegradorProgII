var express = require("express");
var router = express.Router();
var controller = require("../controllers/postController");
var posts = require("../module/posts");

router.get("/agregarPost", controller.mostrarAgregarPost);
router.get("/detallePost/:id", controller.mostrarDetallePost);

module.exports = router;