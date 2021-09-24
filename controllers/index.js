const db = require("../database/models")
const bcryptjs = require('bcryptjs')
const session = require('express-session');

const op = db.Sequelize.Op

module.exports = {

    principal: (req, res) => {
        db.Producto.findAll({
            limit : 8,
            order : [
                ["created_at", "DESC"],
            ],
        })
        .then(productos =>{
            return res.render("index", {productos});
            
        })

    },
    search : (req,res) =>{
        let search = req.query.search;
        if(search === ''){
            db.Producto.findAll()
            .then(respuesta =>{
                return res.render('index', {respuesta})
            })
            .catch(error => console.log(error))
        }else{
            db.Producto.findAll({
                where: [
                    {
                        nombre : {[op.like]: '%'+ search+'%'}
                    }
                ]
            })
            .then(productos =>{
                return res.render('searchResults', {productos})
            })
            .catch(error => console.log(error))
        }

    },

    

    perfil: (req, res) => {

        db.Usuario.findByPk(req.params.id,{
            include: [
                {association: "productos"},
                ]                
        })
        .then(usuario =>{
            //console.log(miProducto+"------")
            return res.render("perfil", {usuario});
        })
        .catch(error => console.log(error+"*****"))
    },

    editar: (req, res) => {
        let idUsuario = req.params.id
        db.Usuario.findByPk(idUsuario)
        .then(usuario => {
            return res.render("perfilEditar", {usuario})   
        })
         
        

    },
    edit: (req, res) =>{
        db.Usuario.update({
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            email : req.body.email,
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
            telefono: req.body.telefono,
            password : bcryptjs.hashSync(req.body.password, 10)
        },
        {
            where: {
                id : req.body.idUsuario,
            }
            
        })
        .then(()=>{
            return res.redirect('/');
        })    
        

    },
    

    
    
}