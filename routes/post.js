var express = require('express');
var router = express.Router();
const productController = require("../controllers/postController")



/* GET homee page. */


router.get("/", postController.principal)

router.get('/id/:id', postController.producto) 

router.get('/add/:id', postController.add)

router.get("/editar/:id", postController.editar)

router.post("/edit", postController.edit)

router.post("/store", postController.store)

router.post("/comentario", postController.comentario)

router.post('/borrar/:id', postController.borrar);


module.exports = router;


/* Codigo de Play ground
 router.get('/'), (req, res) => {
    return res.send('Index de Productos');
};*/