let db = require('../database/models');
const op = db.Sequelize.Op
const {where, Error} = require("sequelize")


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
            console.log(comentarios)
            res.render('detallePost', { post: data, postId: postId, comentarios: comentarios }) })                           
        })
    .catch(err => console.log(err))  
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
  console.log("hola" + req.session)  
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
edit: function(req, res){

    let posts = db.post.findByPk(req.params.id)
    
    let comentarios = db.Genre.findAll()

    Promise.all([pelicula, genres])
    .then(([pelicula, genres]) => {
        res.render('editMovie',{genres: genres, pelicula: pelicula})
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
},
update: function(req, res){

    let id = req.params.id
    
    posts.update({
      id_usuario: 1,
      img: req.body.imagen,
      descrip: req.body.descripcion,
    },
    {
        where: {
            id: id
        }
    })
    .then(movie => {
        res.redirect("detalleUsuario/:id" + id)
    })

},
delete: function(req, res){
    let id = req.params.id
    posts.destroy({
        where: {
            id: id
        }
    })
    .then(movie => {
        res.redirect('/detalleUsuaio')
    })
},

};

module.exports = postController;


