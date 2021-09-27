var express = require("express");
const postController = require("../controllers/postController");
var router = express.Router();
var postCcontroller = require("../controllers/postController");
var posts = require("../module/posts");

router.get("/agregarPost", postController.mostrarAgregarPost);
router.get("/detallePost/id/:id", postController.mostrarDetallePost);

module.exports = router;