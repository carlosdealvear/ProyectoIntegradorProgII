const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const controller = {
  mostrarIndex: function (req, res) {
    res.render("views/index", {posts: posts.posts, comentarios: comentarios.comentarios, users: users.users});
  },
  mostrarResultadoBusqueda: function (req, res) {
    res.render("views/resultadoBusqueda");
  },
};

module.exports = controller;