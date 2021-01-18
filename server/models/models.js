const Sequelize = require('sequelize');
const sequelize = require('../sequelizeConfig').sequelizeConfig;
var model=function(){
    var models={};
    models.user =sequelize.import('./usersModel');
	return models;
}
module.exports = model;