var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
exports.userlogin =async  (req, res) => {
    if(req.body.email=='') res.status(200).send({status : "FAIL",message: "Email is required"})
    if(req.body.password=='') res.status(200).send({status : "FAIL",message: "Password is required"})
    query = "select * from tbl_users where email='"+req.body.email+"' and password='"+req.body.password+"'";
    result = await sequelize.query(query,{ type: Sequelize.QueryTypes.SELECT });
    if (result.length > 0) res.status(200).send({ status: "OK", message: "Record found!", data: result });
    else res.status(200).send({ status: "FAIL", message: "No data found!" });
}