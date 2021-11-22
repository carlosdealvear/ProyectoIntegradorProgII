module.exports = function(sequelize, dataTypes){
	let alias = 'posts';
	let columnas = {
	    id:{
		autoIncrement: true,
		primaryKey: true,
		type: dataTypes.INTEGER,
	    },
	    id_usuario:{
		type: dataTypes.INTEGER,
	    },
	    img:{
		type: dataTypes.STRING,
	    },
	    descrip:{
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
	let conf= {
	    tableName: 'posteo', 
	    timestamps: false, 
	    underscored: true,        
	}
	
    
       const posts = sequelize.define(alias, columnas, conf);
		posts.associate= function(models){

        posts.belongsTo(models.usuario, {
            as: "creador",
            foreignKey: "id_usuario"
        })
		}
       return posts;
    }