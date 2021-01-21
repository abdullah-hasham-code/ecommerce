var express = require('express');
var usrroute = express.Router();

var usercontroller = require('../controller/usersController');
var router = () => {
    usrroute.route('/buyerlogin').post(function (req, res) {
        usercontroller.buyerlogin(req, res);

    })
    usrroute.route('/buyersignup').post(function (req, res) {
        usercontroller.buyersignup(req, res);

    })
    return usrroute;
}
module.exports = router;