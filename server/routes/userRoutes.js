var express = require('express');
var usrroute = express.Router();

var usercontroller = require('../controller/usersController');
var router = () => {
    usrroute.route('/getusers').post(function (req, res) {
        usercontroller.signup(req, res);

    })
    return usrroute;
}
module.exports = router;