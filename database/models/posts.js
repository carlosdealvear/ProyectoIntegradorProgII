module.exports = function (sequelize, dataTypes) {
	let alias = 'posts';
	let columnas = {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		id_usuario: {
			type: dataTypes.INTEGER,
		},
		img: {
			type: dataTypes.STRING,
		},
		descrip: {
			type: dataTypes.STRING,
		},
		fecha: {
			type: dataTypes.DATE,
		}
	}

	let conf = {
		tableName: 'posteo',
		timestamps: false,
		underscored: true,
	}


	const posts = sequelize.define(alias, columnas, conf);
	posts.associate = function (models) {
		posts.hasMany(models.comentarios, {
			as: "comentarios",
			foreignKey: "id_posteo",
		});
		posts.belongsTo(models.usuario, {
			as: "creador",
			foreignKey: "id_usuario"
		})

	}

	return posts;
}