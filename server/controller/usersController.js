var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
exports.userlogin =async  (req, res) => {
    if(req.body.email=='') res.status(200).send({status : "FAIL",message: "Email is required"})
    if(req.body.password=='') res.status(200).send({status : "FAIL",message: "Password is required"})
    logincheck = "select * from tbl_users where email='"+req.body.email+"' and password='"+req.body.password+"'";
    logincheckresult = await sequelize.query(logincheck,{ type: Sequelize.QueryTypes.SELECT });
    if(logincheckresult.length>0) {
        logincheck +=" and isVerified=1";
        logincheckresult = await sequelize.query(logincheck,{ type: Sequelize.QueryTypes.SELECT });
        if (logincheckresult.length > 0) res.status(200).send({ status: "OK", message: "Login successfully!", data: logincheckresult });
    } else res.status(200).send({status: "FAIL", message: "Please verify your account first then login!"});
    // if (result.length > 0) res.status(200).send({ status: "OK", message: "Login successfully!", data: result });
    // else res.status(200).send({ status: "FAIL", message: "Sorry! this!" });
}