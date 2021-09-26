var express = require('express');
var router = express.Router();

let users = require("../module/users")

/*Get user listing. */
router.get('/', function (req, res, next){
    res.send('todos los usuarios');
});

/*Get All user listing. */
router.get('/index', function (req, res, next){
    res.send(users.users);
});

/*Get user listing. */
router.get('/name/:name', function (req, res, next){
    let name = req.params.name; 
    let usuarios = users.porNombre(name)
    if (usuarios.length > 0) {
        res.send(usuarios)
    } else{
        res.send('no hay usuarios con el nombre ' + name)
    }
    ;
}); 

module.exports = router;