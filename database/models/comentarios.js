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