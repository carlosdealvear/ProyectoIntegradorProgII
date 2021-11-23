var express = require('express');
var router = express.Router();
let postController = require('../controllers/postController');

router.get('/agregarPost', postController.mostrarAgregarPost);
router.post('/agregarPost', postController.store)
router.get('/detallePost/id/:id', postController.mostrarDetallePost);

module.exports = router;
