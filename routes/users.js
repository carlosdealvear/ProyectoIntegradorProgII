var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

router.get("/login", usersController.login)

router.get("/register", usersController.register)

router.post('/store', usersController.store);

router.post('/ingresar', usersController.ingresar);

router.get('/logout', usersController.logout);

module.exports = router;
