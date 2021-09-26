const posts = require('../module/posts');
const users = require('../module/users');
const comments = require('../module/comentarios');
const controller = {
  mostrarAgregarPost: function (req, res) {
    res.render("partials/agregarPost");
  },
  mostrarDetallePost: function (req, res) {
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.id == req.params.id) {
        res.render("partials/editarPost", { posts: element });
      }
    }
  },
};

module.exports = controller;