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
    let userId = req.params.id;
    let user = users.porId(userId);
    let postUsuario = posts.porId(userId);
      if (user) {
        res.render('detalleUsuario', { users: users.users, userId : userId, postUsuario}); 
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
