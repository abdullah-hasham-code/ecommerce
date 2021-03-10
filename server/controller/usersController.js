var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var nodemailer = require('nodemailer');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.sellersignup = async (req, res) => {
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
    otp = Math.floor(100000 + Math.random() * 900000);
    userCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "'";
    userCheckResult = await sequelize.query(userCheck, { type: Sequelize.QueryTypes.SELECT });
    if (userCheckResult.length > 0) res.status(200).send({ status: "FAIL", message: "This email is already taken.Please use different one!" })
    else {
        addUser = "insert into tbl_users(firstName, lastName, email, phoneNumber, gender, age, password, otp, imageUrl, country, region, zip, latitude, longitude, isVerified, role, allowNotification, isDeleted, isActive) values ('" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.email + "','" + req.body.phoneNumber + "','" + req.body.gender + "','" + req.body.age + "','" + req.body.password + "','" + otp + "','" + req.body.imageUrl + "','" + req.body.country + "','" + req.body.region + "','" + req.body.zip + "','" + req.body.latitude + "','" + req.body.longitude + "'," + "'0','SELLER','0','0','1')";
        adduserres = await sequelize.query(addUser);
        if (adduserres) {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: { user: 'abdullahhashamfuuastian@gmail.com', pass: 'Abdullahhasham@12' }
            });
            require.extensions['.html'] = function (module, filename) {
                module.exports = fs.readFileSync(filename, 'utf8');
            };
            var htmldata = require('../Template/Signup.html');
            htmldata = htmldata.replace(new RegExp("CURRENT_YEAR", "g"), new Date().getFullYear());
            htmldata = htmldata.replace(new RegExp("USER", "g"), req.body.firstName + " " + req.body.lastName);
            htmldata = htmldata.replace(new RegExp("OTP", "g"), otp);
            let mailOptions = {
                from: 'abdullahhashamfuuastian@gmail.com',
                to: req.body.email,
                subject: 'Sign up to Ecommerce',
                html: htmldata,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log('success');
            });
            res.status(200).send({ status: "OK", message: "Thankyou for signup.We sent an email verification key to your email address.Please verify your account to get login!" })
        } else res.status(200).send({ status: "OK", message: "Error Signing up your account" })
    }
}
exports.sellerlogin = async (req, res) => {
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    loginCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "' and role='SELLER'";
    loginCheckResult = await sequelize.query(loginCheck, { type: Sequelize.QueryTypes.SELECT });
    if (loginCheckResult.length > 0) {
        verCheck = loginCheck + " and isVerified=1";
        verCheckRes = await sequelize.query(verCheck, { type: Sequelize.QueryTypes.SELECT });
        if (verCheckRes.length > 0) {
            statusCheck = verCheck + " and isActive=1";
            statusChekRes = await sequelize.query(statusCheck, { type: Sequelize.QueryTypes.SELECT })
            if (statusChekRes.length > 0) {
                var token = jwt.sign({ id: statusChekRes[0].id }, "secret", { expiresIn: 86400 });
                var decode = jwt.decode(token);
                if (token) {
                    checkTokenExist = "select * from tbl_users,tbl_sessions where tbl_users.id=" + statusChekRes[0].id + " and tbl_users.role='SELLER' and tbl_users.id=tbl_sessions.userId";
                    checkTokenexistRes = await sequelize.query(checkTokenExist, { type: Sequelize.QueryTypes.SELECT });
                    // console.log(checkTokenexistRes);
                    if (checkTokenexistRes.length > 0) {
                        updSession = "update tbl_sessions set session='" + token + "' where userId='" + statusChekRes[0].id + "'";
                        updsessionRes = await sequelize.query(updSession);
                        console.log(checkTokenexistRes)
                        res.status(200).send({ status: "OK", message: "Login successfully!", data: token, profile: { firstname: checkTokenexistRes[0].firstName, email: checkTokenexistRes[0].email } });
                    } else {
                        insertSession = "insert into tbl_sessions(userId,session,status) values('" + statusChekRes[0].id + "','" + token + "' ,'OPEN')";
                        isertSessionRes = await sequelize.query(insertSession);
                        res.status(200).send({ status: "OK", message: "Login successfully!", data: token, profile: { firstname: checkTokenexistRes[0].firstName, email: checkTokenexistRes[0].email } });
                    }
                }
            }
            else res.status(200).send({ status: "FAIL", message: "Your account is suspended by site admin. Please contact site administrator and try again!" })
        } else res.status(200).send({ status: "FAIL", message: "Your account is not verified. Please verify you account and try again!" })
    } else res.status(200).send({ status: "FAIL", message: "Invalid login credentials!" });
}
exports.buyersignup = async (req, res) => {
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
    otp = Math.floor(100000 + Math.random() * 900000);
    userCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "'";
    userCheckResult = await sequelize.query(userCheck, { type: Sequelize.QueryTypes.SELECT });
    if (userCheckResult.length > 0) res.status(200).send({ status: "FAIL", message: "This email is already taken.Please use different one!" })
    else {
        addUser = "insert into tbl_users(firstName, lastName, email, phoneNumber, gender, age, password, otp, imageUrl, country, region, zip, latitude, longitude, isVerified, role, allowNotification, isDeleted, isActive) values ('" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.email + "','" + req.body.phoneNumber + "','" + req.body.gender + "','" + req.body.age + "','" + req.body.password + "','" + otp + "','" + req.body.imageUrl + "','" + req.body.country + "','" + req.body.region + "','" + req.body.zip + "','" + req.body.latitude + "','" + req.body.longitude + "'," + "'0','BUYER','0','0','1')";
        adduserres = await sequelize.query(addUser);
        if (adduserres) {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: { user: 'abdullahhashamfuuastian@gmail.com', pass: 'Abdullahhasham@12' }
            });
            require.extensions['.html'] = function (module, filename) {
                module.exports = fs.readFileSync(filename, 'utf8');
            };
            var htmldata = require('../Template/Signup.html');
            htmldata = htmldata.replace(new RegExp("CURRENT_YEAR", "g"), new Date().getFullYear());
            htmldata = htmldata.replace(new RegExp("USER", "g"), req.body.firstName + " " + req.body.lastName);
            htmldata = htmldata.replace(new RegExp("OTP", "g"), otp);
            let mailOptions = {
                from: 'abdullahhashamfuuastian@gmail.com',
                to: req.body.email,
                subject: 'Sign Up to Ecommerce',
                html: htmldata,
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log('success');
            });
            res.status(200).send({ status: "OK", message: "Thankyou for signup.We sent an email verification key to your email address.Please verify your account to get login!" })
        } else res.status(200).send({ status: "OK", message: "Error Signing up your account" })
    }
}
exports.buyerlogin = async (req, res) => {
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" })
    if (req.body.password == '') res.status(200).send({ status: "FAIL", message: "Password is required" })
    loginCheck = "select * from tbl_users where email='" + req.body.email + "' and password='" + req.body.password + "' and role='BUYER'";
    loginCheckResult = await sequelize.query(loginCheck, { type: Sequelize.QueryTypes.SELECT });
    if (loginCheckResult.length > 0) {
        verCheck = loginCheck + " and isVerified=1";
        verCheckRes = await sequelize.query(verCheck, { type: Sequelize.QueryTypes.SELECT });
        if (verCheckRes.length > 0) {
            statusCheck = verCheck + " and isActive=1";
            statusChekRes = await sequelize.query(statusCheck, { type: Sequelize.QueryTypes.SELECT })
            if (statusChekRes.length > 0) {
                var token = jwt.sign({ id: statusChekRes[0].id }, "secret", { expiresIn: 86400 });
                if (token) {
                    checkTokenExist = "select * from tbl_users,tbl_sessions where tbl_users.id=" + statusChekRes[0].id + " and tbl_users.role='BUYER' and tbl_users.id=tbl_sessions.userId";
                    checkTokenexistRes = await sequelize.query(checkTokenExist, { type: Sequelize.QueryTypes.SELECT });
                    if (checkTokenexistRes.length > 0) {
                        updSession = "update tbl_sessions set session='" + token + "' where userId='" + statusChekRes[0].id + "'";
                        updsessionRes = await sequelize.query(updSession);
                        res.status(200).send({ status: "OK", message: "Login successfully!", data: token });
                    } else {
                        insertSession = "insert into tbl_sessions(userId,session,status) values('" + statusChekRes[0].id + "','" + token + "' , 'OPEN')";
                        isertSessionRes = await sequelize.query(insertSession);
                        res.status(200).send({ status: "OK", message: "Login successfully!", data: token });
                    }
                }
            }
            else res.status(200).send({ status: "FAIL", message: "Your account is suspended by site admin. Please contact site administrator and try again!" })
        } else res.status(200).send({ status: "FAIL", message: "Your account is not verified. Please verify you account and try again!" })
    } else res.status(200).send({ status: "FAIL", message: "Invalid login credentials!" });
}
exports.verifyotp = async (req, res) => {
    if (req.body.otp == '') res.status(200).send({ status: "FAIL", message: "Otp is required" });
    if (req.body.email == '') res.status(200).send({ status: "FAIL", message: "Email is required" });
    otpcheck = "select * from tbl_users where email='" + req.body.email + "' and otp='" + req.body.otp + "'";
    otpcheckres = await sequelize.query(otpcheck, { type: Sequelize.QueryTypes.SELECT });
    if (otpcheckres.length > 0) {
        verifyuser = "update tbl_users set isVerified=1 where email='" + req.body.email + "'";
        verifyuserres = await sequelize.query(verifyuser);
        if (verifyuserres) res.status(200).send({ status: "OK", message: "OTP verifed successfully you can login to ecommerce" })
        else res.status(200).send({ status: "OK", message: "Unable to verify your email!.Please try later" })
    }
    else res.status(200).send({ status: "Ok", message: "Invalid OTP" })
}