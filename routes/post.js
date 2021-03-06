var express = require('express');
var router = express.Router();
let postController = require('../controllers/postController');
var multer = require('multer')
var path = require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../public/images');
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.get('/agregarPost', postController.mostrarAgregarPost);
router.post('/agregarPost', upload.single("imagen") , postController.store)
router.get('/detallePost/id/:id', postController.mostrarDetallePost);
router.post('/detallePost/id/:id', postController.agregarComentarios);
router.post('/detallePost/id/:id/eliminar', postController.eliminar)
router.post('/detallePost/id/:id/borrar/:comentario', postController.borrar)
router.get('/editarPost/id/:id', postController.editarPost)
router.post('/editarPost/id/:id', postController.editarPosteo)






module.exports = router;
