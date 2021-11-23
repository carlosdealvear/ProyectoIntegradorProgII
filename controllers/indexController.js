let db = require('../database/models');
const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');
const {
  json} = require("express")
op = db.Sequelize.Op

const indexController = {
  mostrarIndex: function (req, res) {
    res.render('index', {
      posts: posts.posts,
      comentarios: comentarios.comentarios,
      users: users.users
    });

  },
  mostrarResultadoBusqueda: function (req, res) {
    let buscado = req.query.search
    let resultados = []
    db.posts.findAll({
        where: {
          [op.or]: [{
            descrip: {
              [op.like]: `%${buscado}%`
            }
          }]
        },
        include: [{
          association: "creador"
        }]
      })
      .then((result) => {
        for (let index = 0; index < result.length; index++) {
          resultados.push(result[index].dataValues)

        }
        return res.render('resultadoBusqueda', {
          buscado: buscado,
          resultados: result
        })
      })
      .catch((error) => {
        return res.send(error)
      })
  },
};

module.exports = indexController;