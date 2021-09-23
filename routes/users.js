var express = require('express');
var router = express.Router();

let users = require("../module/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.send(users.users);
});

/* GET ID listing. */
router.get('/nombre/:nombre', function(req, res, next) {
  let nombre = req.params.nombre;
  let usuario = users.porNombre(nombre)
  if (usuario.length > 0) {
    res.send(usuario)
  } else {
    
  }
  res.send("no hay usuarios con el nombre solicitado");
});

module.exports = router;
