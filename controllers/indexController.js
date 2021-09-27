const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const controller = {
  mostrarIndex: function (req, res) {
    res.render("views/index", {posts: posts.list, comments: comments.list, users: users.list});
  },
  mostrarResultadoBusqueda: function (req, res) {
    res.render("views/resultadoBusqueda");
  },
};

module.exports = controller;