const posts = require('../module/posts');
const users = require('../module/users');
let db = require('../database/models');
let bcrypt = require('bcryptjs');

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

				let existeMail = email;

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
						.then(_users => {
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
module.exports = registracionController;