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
    shoproute.route('/createcategory').post(authController.authToken,function(req,res){
        shopController.createcategory(req,res);
        asdadasd
    })
    return shoproute;
}
module.exports = router;