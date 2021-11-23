let db = require('../database/models');
const posts = require('../module/posts');
const users = require('../module/users');
const comentarios = require('../module/comentarios');
const {
  json} = require("express")
op = db.Sequelize.Op

const indexController = {
  mostrarIndex: function (req, res) {
    db.posts.findAll({
      include: [
        {
          all: true,
          nested: true //Fetch all models associated with User and their nested associations (recursively)
      }
      ],
      order: [['fecha', 'DESC'],] //will escape fecha and validate DESC against a list of valid direction parameters
      })
      .then(posteos => {
        console.log(posteos[0])
        return res.render('index', {posteos: posteos})
      })
      .catch(error => {
        return res.send(error)
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