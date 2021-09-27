var express = require('express');
var router = express.Router();
let postController = require('../controllers/postController');

router.get('/', postController.mostrarAgregarPost);
router.get('/:id', postController.mostrarDetallePost);

module.exports = router;
