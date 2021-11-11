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
        
    }

    let config = {
        tableName: 'usuarios', 
        timestamps: false, 
        underscored: true, 
    }
        const usuario = sequelize.define(alias, columnas, config);

        return usuario;
}