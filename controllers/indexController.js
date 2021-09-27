const posts = require('../module/posts');               
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const indexController = {                               
  mostrarIndex: function (req, res) {
    res.render('index', {posts: posts.posts, comentarios: comentarios.comentarios, users: users.users});
  },
  mostrarResultadoBusqueda: function (req, res) {
    res.render('resultadoBusqueda');
  },
};

module.exports = indexController;      
