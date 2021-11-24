let db = require('../database/models');
const op = db.Sequelize.Op
const {where} = require("sequelize");

const postController = {
  mostrarAgregarPost: function (req, res) {                 
    res.render('agregarPost');                            
  },

  mostrarDetallePost: function (req, res) {
    let postId = req.params.id;
    db.posts.findByPk(postId, {
      include: [{
        association: "creador"
      }]
    })
    .then((data)=>{
        db.comentarios.findAll({
            where: {
                id_posteo: postId
            }, 
            include: [{
                association: "usuario"
            }]
        })
        .then(comentarios => {
            res.render('detallePost', { post: data, postId: postId, comentarios: comentarios }) })                           
        })
    .catch(err => console.log(err))  
  },

  editarPost: function (req, res) {   

            res.render('editarPost' );                            
                      
  },

  editarPosteo: function (req, res) {  
    let idPosteo = req.params.id;

    let posteo = {
        id_usuario: req.session.user.id,
        descrip: req.body.descripcion,
        fecha: 000,
        img:""
      }
      if (req.file) {
          posteo.img = req.file.fieldname
      }

  db.posts.update(posteo, {
    where: {
      id: idPosteo,
    },
  })
    .then((resultados) => {
      res.redirect("/users/detalleUsuario/" + req.session.user.id);
    })
    .catch((error) => {
      return res.send(error);
    });                                     
  },

  agregarComentarios: function (req, res) {                 
    let postId = req.params.id
    db.comentarios.create({      
        id_posteo: postId,
        id_usuario: req.session.user.id,
        texto: req.body.text,
        fecha: 000,
  })
  .then(post => {
      res.redirect('/post/detallePost/id/' + postId)
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
  },

store: function(req, res){
  let posteo = {
    id_usuario: req.session.user.id,
    descrip: req.body.descripcion,
    fecha: 000,
    img:""
  }
  if (req.file) {
      posteo.img = req.file.fieldname
  }

  db.posts.create(posteo)
    .then(post => {
        res.redirect('/index')
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })

},
eliminar: function(req, res){
    let id = req.params.id
    db.comentarios.destroy({
        where: {
            id_posteo: id
        }
    })
    .then(posteitos =>{
    db.posts.destroy({
        where: {
            id: id
        }
    })
    .then(post => {
        
            res.redirect('/index')  
        })
        
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
},
borrar: function(req, res){
    let id = req.params.id
    let idComentario = req.params.comentario
    db.comentarios.destroy({
        where: {
            id: idComentario
        }
    })
    .then(post => {
        
            res.redirect('/post/detallePost/id/' + id)  
        })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
},

};

module.exports = postController;


