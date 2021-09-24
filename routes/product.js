var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")



/* GET homee page. */


router.get("/", productController.principal)

router.get('/id/:id', productController.producto) 

router.get('/add/:id', productController.add)

router.get("/editar/:id", productController.editar)

router.post("/edit", productController.edit)

router.post("/store", productController.store)

router.post("/comentario", productController.comentario)

router.post('/borrar/:id', productController.borrar);


module.exports = router;


/* Codigo de Play ground
 router.get('/'), (req, res) => {
    return res.send('Index de Productos');
};*/