module.exports = function(sequelize, dataTypes){
	let alias = 'posts'; //Con este alias sequelize va a identificar internamente al archivo de modelo.
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
	    }
	}
    
	let conf= {
	    tableName: 'posts', 
	    timestamps: false, 
	    underscored: true,        
	}
    
       const Post = sequelize.define(alias, columnas, conf);
    
       return posts;
    }