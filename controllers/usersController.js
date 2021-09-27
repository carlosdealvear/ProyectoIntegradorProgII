const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const usersController = {
  mostrarLogin: function (req, res) {
    res.render('login');
  },
  mostrarRegister: function (req, res) {
    res.render('registracion');
  },
  
  mostrarDetalleUsuario: function (req, res) {
    var username = req.params.username;
    var user = users.findUsername(username);
    var usernamePost = posts.findUsername(username);
    if (user) {
      res.render('detalleUsuario', { user: user, usernamePost });
    } else {
      return "error";
    }
  },

  mostrarEditarPerfil: function (req, res) {
    res.render('editarPerfil');
  },
  mostrarMiPerfil: function (req, res) {
    res.render('miPerfil', {user: users, posts: posts});
  },
};

module.exports = usersController;
