const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');

const postController = {
  mostrarAgregarPost: function (req, res) {                 
    res.render('agregarPost');                            
  },
  mostrarDetallePost: function (req, res) {
    let postId = req.params.id;
    for (let i = 0; i < posts.posts.length; i++) {
      const element = posts.posts[i];
      if (element.id == postId) {                    
        res.render('detallePost', { posts: element, postId: postId, comentarios: comentarios.comentarios });     
      }
    }
  },
};

module.exports = postController;


