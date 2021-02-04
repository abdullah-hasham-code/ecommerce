var express = require('express');
var shoproute = express.Router();
var shopController = require('../controller/shopController');
var authController = require('../controller/authController');
var router = () => {
    shoproute.route('/createshop').post(authController.authToken,function(req,res){
        shopController.createshop(req,res);
    })
    shoproute.route('/createproduct').post(authController.authToken,function(req,res){
        shopController.createproduct(req,res);
    })
    return shoproute;
}
module.exports = router;