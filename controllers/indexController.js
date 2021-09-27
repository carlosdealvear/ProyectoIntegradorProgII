const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const controller = {
  mostrarIndex: function (req, res) {
    res.render("index", {posts: posts.porId, comentarios: comentarios.porId, users: users.porNombre});
  },
  mostrarResultadoBusqueda: function (req, res) {
    res.render("resultadoBusqueda");
  },
};

module.exports = controller;