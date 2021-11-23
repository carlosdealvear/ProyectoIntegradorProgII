module.exports = function(sequelize, dataTypes){
    let alias = "comentarios";
    let columnas = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_posteo:{
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        texto:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: 'comentarios', 
        timestamps: false, 
        underscored: true,
    }
    const comentarios = sequelize.define(alias, columnas, config);
    comentarios.associate = function(models){
        comentarios.belongsTo(models.usuario,{
            as: 'Usuario',
            foreignKey: 'usuario_id'
        })
    }
        return comentarios;
}