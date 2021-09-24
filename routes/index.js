var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.principal) 

router.get("/perfil/:id", indexController.perfil)

router.get("/perfil/editar/:id", indexController.editar)

router.post("/perfil/edit", indexController.edit)

router.get('/search', indexController.search);

module.exports = router;
