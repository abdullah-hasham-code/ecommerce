var express = require('express');
var usrroute = express.Router();

var usercontroller = require('../controller/usersController');
var router = () => {
    usrroute.route('/sellersignup').post(function (req, res) {
        usercontroller.sellersignup(req, res);

    })
    usrroute.route('/sellerlogin').post(function (req, res) {
        usercontroller.sellerlogin(req, res);

    })
    usrroute.route('/buyersignup').post(function (req, res) {
        usercontroller.buyersignup(req, res);

    })
    usrroute.route('/buyerlogin').post(function (req, res) {
        usercontroller.buyerlogin(req, res);

    })
    usrroute.route('/verifyotp').post(function (req, res) {
        usercontroller.verifyotp(req, res);

    })
    usrroute.route('/checktoken').post(function (req, res) {
        usercontroller.checktoken(req, res);

    })
    return usrroute;
}
module.exports = router;