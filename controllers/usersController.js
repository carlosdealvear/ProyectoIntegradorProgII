const db = require('../database/models');
const bcrypt = require('bcryptjs');
op = db.Sequelize.Op


const usersController = {
  //franco
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
     req.session.user = user;  //al momento de querer definir y almacenar info, llamamos a la propiedad session del objeto request 
      res.cookie("id_usuario", user.id,{
        maxAge : 1000 * 60 * 60 * 24 // 86400000 ms
      } )
     return res.redirect ("/index")
   }
 })
 .catch(err => {
   res.send(err);
 })

  },
//carlos
  mostrarDetalleUsuario: function(req, res, next) {
      db.usuario.findByPk(req.params.id)    
      .then(usuario =>{
        db.posts.findAll({
          where: { id_usuario: req.params.id}          
        })
        .then(posteosUsuario =>{
          console.log(posteosUsuario)
          return res.render('detalleUsuario', {usuario: usuario, posteosUsuario: posteosUsuario} )
        })
      })
      .catch(error =>{ 
          console.log(error)
          return res.send(error)
      })
  },


  mostrarEditarPerfil: function (req, res) {
    res.render('editarPerfil');
  },

  mostrarMiPerfil: function (req, res) {
    let userId = req.params.id;
    let user = users.findByPk(userId);
    let postUsuario = posts.findAll(userId({where: {
      [op.or]: [{
        descrip: {
          [op.like]: `%${buscado}%`
        }
      }]
    },
    include: [{
      association: "creador"
    }]}));
      if (user) {
        res.render('/users/detalleUsuario/'+ userId, { users: users.users, userId : userId, postUsuario, posts: posts.posts}); 
      } else {
        return "error";
      }
    },
//franco 
  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("id_usuario")
    return res.redirect('/users/login');
  },

}


module.exports = usersController;


