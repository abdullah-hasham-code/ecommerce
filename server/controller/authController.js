var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var jwt = require('jsonwebtoken');

exports.authToken = async (req, res,next) => {

    if (req.headers.token == '') res.status(403).send({ status: "FAIL", message: "Please pass the access token" });
    else{
        sesscheck = "select * from tbl_sessions where session='" + req.headers.token + "' and status='OPEN'";
        sesscheckres = await sequelize.query(sesscheck, { type: Sequelize.QueryTypes.SELECT });
        if (sesscheckres.length == 0) res.status(403).send({ status: "FAIL", message: "Invalid access token!" });
        else next();
    }
}