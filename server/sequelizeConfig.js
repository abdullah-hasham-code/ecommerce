const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_ecommerce', 'root','', {
	// host : 'host name',
	host : 'localhost',
	port : 3306,
	dialect : 'mysql',
	logging: false,
	pool : {
		max : 10,
		min : 0,
		idle : 10000
	},
})
module.exports.sequelizeConfig=sequelize;