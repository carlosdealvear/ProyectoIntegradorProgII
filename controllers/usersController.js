const posts = require('../module/posts');
const users = require('../module/users');
const comments = require('../module/comentarios');

const controller = {
  mostrarLogin: function (req, res) {
    res.render("partials/login");
  },
  mostrarRegister: function (req, res) {
    res.render("partials/registracion");
  },
  mostrarDetalleUsuario: function (req, res) {
    var username = req.params.username;
    var user;
    var post = [];

    for (let i = 0; i < users.list.length; i++) {
      const element = users.list[i];
      if (element.username == username) {
        user = element;
      }
    }
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.username == username) {
        post.push(element);
      }
    }
    if (user) {
      res.render("partials/detalleUsuario", { user: users, posts: posts });
    } else {
      return "error";
    }
  },
  mostrarEditarPerfil: function (req, res) {
    res.render("partials/editarPerfil");
  },
  mostrarMiPerfil: function (req, res) {
    res.render("partials/miPerfil", {user: users, posts: posts});
  },
};

module.exports = controller;
