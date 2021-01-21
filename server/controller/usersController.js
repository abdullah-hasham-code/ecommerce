var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
exports.buyersignup=async(req,res)=>{
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    if (req.body.imageUrl == '') res.status(200).send({ status: "FAIL", message: "Image Url is required" })
    if (req.body.firstName == '') res.status(200).send({ status: "FAIL", message: "First Name is required" })
    if (req.body.lastName == '') res.status(200).send({ status: "FAIL", message: "Last Name is required" })
    if (req.body.phoneNumber == '') res.status(200).send({ status: "FAIL", message: "Phone Number is required" })
    if (req.body.gender == '') res.status(200).send({ status: "FAIL", message: "Gender is required" })
    if (req.body.age == '') res.status(200).send({ status: "FAIL", message: "Age is required" })
    if (req.body.country == '') res.status(200).send({ status: "FAIL", message: "Country is required" })
    if (req.body.region == '') res.status(200).send({ status: "FAIL", message: "Region is required" })
    userCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "'";
    userCheckResult = await sequelize.query(userCheck, { type: Sequelize.QueryTypes.SELECT });
    if(userCheckResult.length>0) res.status(200).send({status:"FAIL",message:"This email is already taken.Please use different one!"})
    else{
        addUser="insert into tbl_users(firstName, lastName, email, phoneNumber, gender, age, password, imageUrl, country, region, zip, latitude, longitude, isVerified, role, allowNotification, isDeleted, isActive) values ('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.email+"','"+req.body.phoneNumber+"','"+req.body.gender+"','"+req.body.age+"','"+req.body.password+"','"+req.body.imageUrl+"','"+req.body.country+"','"+req.body.region+"','"+req.body.zip+"','"+req.body.latitude+"','"+req.body.longitude+"',"+"'0','BUYER','0','0','0')";
        adduserres=await sequelize.query(addUser);
        if(adduserres) {
            res.status(200).send({status : "OK",message:"Thankyou for signup.We sent an email verification key to your email address.Please verify your account to get login!"})
        }  else  res.status(200).send({status : "OK",message:"Error Signing up your account"})
    }
}
exports.buyerlogin = async (req, res) => {
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    loginCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "' and role='BUYER'";
    console.log(loginCheck)
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