var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.authToken = async (req, res) => {
    if (req.headers.token == '') res.status(403).send({ status: "FAIL", message: "Please pass the access token" });
    if (req.headers.token) {
        sesscheck = "select * from tbl_sessions where session='" + req.headers.token + "' and status='OPEN'";
        sesscheckres = await sequelize.query(sesscheck, { type: Sequelize.QueryTypes.SELECT });
        if (sesscheckres.length > 0) return req.headers.token;
        else return false;
    } else res.status(403).send({ status: "FAIL", message: "Invalid access token!" });
}