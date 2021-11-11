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
		// db.usuario.findAll({
		// 		where: {
		// 			email: req.body.email
		// 		}
		// 	})
		// 	.then(function (email) {

		// 		 existeMail = email;

		// 		if (req.body.email == "") {
		// 			errores.message = "No puede estar vacio este campo";
		// 			res.locals.error = errores;
		// 			res.render("registracion")
		// 		} else if (req.body.password == "") {
		// 			errores.message = "Falta la contraseña!!";
		// 			res.locals.error = errores;
		// 			res.render("registracion")
		// 		} else if (existeMail != "") { // != significa not equal to 
		// 			errores.message = "Este mail ya esta en uso.";
		// 			res.locals.error = errores;
		// 			res.render("registracion")
		// 		} else {
		// 			let encriptPass = bcrypt.hashSync(req.body.password, 10)
		// 			db.usuario.create({
		// 					nombre: req.body.username,
		// 					email: req.body.email,
		// 					password: encriptPass,
		// 					fecha: req.body.fecha,
		// 					createdAt: Date.now()
		// 				})
		// 				.then(_users => {
		// 					res.redirect('/')
		// 				})
		// 				.catch(err => {
		// 					console.log(err);
		// 					res.send(err)
		// 				})
		// 		}
		// 	})//
	 req.body.password = bcrypt.hashSync(req.body.password)
		const usuarioCreado ={ 
			nombre:req.body.nombre ,
			apellido:req.body.apellido ,
			username:req.body.username ,
			email:req.body.email ,
			password:req.body.password ,
			fecha:req.body.fecha,
		} 
		db.usuario.create (usuarioCreado)
		.then (function (usuario){
			return res.redirect ("/users/login")
		}
			)
			.catch(err => {
				console.log(err);
				res.send(err) })
   
	},
	//la parte del login etcetera
	login: function (req, res) {
		if (req.session.users == undefined) {
			res.render('login')
		} else {
			res.redirect("/")
		}
	},
	FuncionLogueo: function (req, res) {

		let errors = {};

		if (req.body.email == "") {
			errors.message = "El campo del email no puede estar vacio";
			res.locals.error = errors;
			res.render("login")
		} else {
			db.usuario.findOne({
					where: {
						email: req.body.email
					}
				})
				.then(function (user) {
					if (user != undefined) {
						let passCorrecta = bcrypt.compareSync(req.body.password, user.password)
						if (passCorrecta == true) {
							req.session.user = user;
							if (req.body.remind) {
								res.cookie("id_usuario", users.id, {
									maxAge: 1000 * 60 * 30
								})
							}
							return res.redirect("/")
						} else {
							errors.message = "No se acepta esta contraseña";
							res.locals.error = errors;
							res.render("login");
						}
					} else {
						errors.message = "No hay un usuario con este mail";
						res.locals.error = errors;
						res.render("login");
					}
				})
				.catch(err => {
					console.log(err);
					res.send(err)
				})
		}
	},
	logout: function (req, res) {
		req.session.destroy();
		res.clearCookie("id_usuario");
		res.redirect("/user/login");
	}
}

module.exports = registracionController;