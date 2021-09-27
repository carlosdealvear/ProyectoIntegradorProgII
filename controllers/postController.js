const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');
const controller = {
  mostrarAgregarPost: function (req, res) {
    res.render("agregarPost");
  },
  mostrarDetallePost: function (req, res) {
    for (let i = 0; i < posts.posts.length; i++) {
      const element = posts.posts[i];
      if (element.id == req.params.id) {
        res.render("detallePost", { posts: element });
      }
    }
  },
};

module.exports = controller;