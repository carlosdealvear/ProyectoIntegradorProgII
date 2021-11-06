const posts = require('../module/posts');
const users = require('../module/users');
let db = require('../database/models');
let bcrypt = require('bcryptjs');

const usersController = {
  mostrarLogin: function (req, res) {
    res.render('login');
  },
  mostrarRegistracion: function (req, res) {
    res.render('registracion');
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
};




// registracion
const registracionController = {

	registracion: function (req, res) {
		res.render('registracion')
	},
	registrar: function (req, res) {
		let errores = {}
		let existeMail;

		db.users.findAll({
				where: {
					email: req.body.email
				}
			})
			.then(function (email) {

				existeMail = email;

				if (req.body.email == "") {
					errores.message = "No puede estar vacio este campo";
					res.locals.error = errores;
					res.render("registracion")
				} else if (req.body.password == "") {
					errores.message = "Falta la contraseña!!";
					res.locals.error = errores;
					res.render("registracion")
				} else if (existeMail != "") { // != significa not equal to 
					errores.message = "Este mail ya esta en uso.";
					res.locals.error = errores;
					res.render("registracion")
				} else {
					let encriptPass = bcrypt.hashSync(req.body.password, 10)
					db.users.create({
							nombre: req.body.username,
							email: req.body.email,
							password: encriptPass,
							fecha: req.body.fecha,
							createdAt: Date.now()
						})
						.then(users => {
							res.redirect('/')
						})
						.catch(err => {
							console.log(err);
							res.send(err)
						})
				}
			})

	},
}
module.exports = usersController;

module.exports = registracionController;
