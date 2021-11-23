let db = require('../database/models');
op = db.Sequelize.Op
const posts = db.posts
const users = db.users
const comentarios = db.comentarios

const postController = {
  mostrarAgregarPost: function (req, res) {                 
    res.render('agregarPost');                            
  },
  mostrarDetallePost: function (req, res) {
    let postId = req.params.id;
    posts.findByPk(postId, {
      include: [{
        association: "comentarios"
      }]
    })
    .then((data)=> res.render('detallePost', { posts: data, postId: postId, comentarios: data.comentarios }))                            
    .catch(err => console.log(err))  
  },

store: function(req, res){
  console.log(res)  
  db.posts.create({      
          id_usuario: res.session.id_usuario,
          img: req.body.imagen,
          descrip: req.body.descripcion,
    })
    .then(movie => {
        res.redirect('/detalleUsuario')
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })

},
edit: function(req, res){

    let posts = db.Movie.findByPk(req.params.id)
    
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


