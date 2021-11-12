const db = require('../database/models');
const posts = require('../module/posts');
const users = require('../module/users');
const bcrypt = require('bcryptjs');

const usersController = {
  mostrarLogin: function (req, res) {
    res.render('login');
  },
  autenticarUsuario: function (req, res) {
 db.usuario.findOne({ 
   where :  {email : req.body.email}
 })
 .then(function(user){
  if(bcrypt.compareSync(req.body.password, user.password))
   {
     req.session.user = user;
     if(req.session.user){
       console.log("andando");
     }
      res.cookie("id_usuario", user.id,{
        maxAge : 1000 * 60 * 60 * 24
      } )
     return res.redirect ("index")
   }
 })
 .catch(err => {
   res.send(err);
 })

  },

  mostrarDetalleUsuario: function (req, res) {
    let userId = req.params.id;
    let user = users.porId(userId);
    let postUsuario = posts.porId(userId);
      if (user) {
        res.render('detalleUsuario', { users: users.users, userId : userId, postUsuario, posts: posts.posts}); 
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

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("id_usuario")
    return res.redirect('/users/login');
  },

};

module.exports = usersController;


