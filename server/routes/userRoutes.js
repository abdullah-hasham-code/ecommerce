var express = require('express');
var userroute = express.Router();

var userController = require('../controller/usersController');
var router = () => {
    userroute.route('/sellersignup').post(function (req, res) {
        userController.sellersignup(req, res);
    })
    userroute.route('/sellerlogin').post(function (req, res) {
        userController.sellerlogin(req, res);
    })
    userroute.route('/buyersignup').post(function (req, res) {
        userController.buyersignup(req, res);
    })
    userroute.route('/buyerlogin').post(function (req, res) {
        userController.buyerlogin(req, res);
    })
    userroute.route('/verifyotp').post(function (req, res) {
        userController.verifyotp(req, res);
    })
    return userroute;
}
module.exports = router;