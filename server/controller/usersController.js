var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
exports.usersignup=async(req,res)=>{
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    userCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "'";
    userCheckResult = await sequelize.query(userCheck, { type: Sequelize.QueryTypes.SELECT });
    if(userCheckResult.length>0) res.status(200).send({status:"FAIL",message:"This email is already taken.Please use different one!"})
    else{
        // insert user in the table code here
        // addUser="insert into tbl_users"
    }
}
exports.userlogin = async (req, res) => {
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    loginCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "'";
    loginCheckResult = await sequelize.query(loginCheck, { type: Sequelize.QueryTypes.SELECT });
    if (loginCheckResult.length > 0) {
        verCheck = loginCheck + " and isVerified=1";
        verCheckRes = await sequelize.query(verCheck, { type: Sequelize.QueryTypes.SELECT });
        if (verCheckRes.length > 0) {
            statusCheck = verCheck + " and isActive=1";
            statusChekRes = await sequelize.query(statusCheck, { type: Sequelize.QueryTypes.SELECT })
            if(statusChekRes.length>0) res.status(200).send({ status: "OK", message: "Login successfully!", data: statusChekRes });
            else res.status(200).send({status:"FAIL",message:"Your account is suspended by site admin. Please contact site administrator and try again!"})   
        } else res.status(200).send({ status: "FAIL", message: "Your account is not verified. Please verify you account and try again!" })
    } else res.status(200).send({ status: "FAIL", message: "Invalid login credentials!" });
}