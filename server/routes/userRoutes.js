var express = require('express');
var usrroute = express.Router();

var usercontroller = require('../controller/usersController');
var router = () => {
    usrroute.route('/userlogin').post(function (req, res) {
        usercontroller.userlogin(req, res);

    })
    usrroute.route('/usersignup').post(function (req, res) {
        usercontroller.usersignup(req, res);

    })
    return usrroute;
}
module.exports = router;