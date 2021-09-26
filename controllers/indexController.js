const posts = require('../module/posts');
const users = require('../module/users');
const comments = require('../module/comentarios');

const controller = {
  mostrarIndex: function (req, res) {
    res.render("partials/index", {posts: posts.list, comments: comments.list, users: users.list});
  },
  mostrarResultadoBusqueda: function (req, res) {
    res.render("partials/resultadoBusqueda");
  },
};

module.exports = controller;