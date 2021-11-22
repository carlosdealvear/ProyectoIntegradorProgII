module.exports = function(sequelize, dataTypes){
    let alias = "usuario";
    let columnas = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.INTEGER,
        },
        apellido:{
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE,
        },
        img:{
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: "messi.jpeg",
        },
        username:{
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
            field: "created_at"
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: "updated_at"
        }
    }

    let config = {
        tableName: 'usuarios', 
        timestamps: false, 
        underscored: true, 
    }
        const usuario = sequelize.define(alias, columnas, config);
        usuario.associate= (models) =>{

        usuario.hasMany(models.posts, {
            as: "posts",
            foreignKey: "id_usuario"
        });
        usuario.hasMany(models.comentarios,{
            as: 'Comentarios',
            foreignKey: 'id_usuario'
        })
        }
        return usuario;
}