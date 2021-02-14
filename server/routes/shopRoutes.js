var express = require('express');
var shoproute = express.Router();
var shopController = require('../controller/shopController');
var authController = require('../controller/authController');
var router = () => {
    shoproute.route('/createshop').post(authController.authToken, function (req, res) {
        shopController.createshop(req, res);
    })
    shoproute.route('/checkshopexist').post(authController.authToken, function (req, res) {
        shopController.checkshopexist(req, res);
    })
    shoproute.route('/getallcategories').post(authController.authToken, function (req, res) {
        shopController.getallcategories(req, res);
    })
    shoproute.route('/createproduct').post(authController.authToken, function (req, res) {
        shopController.createproduct(req, res);
    })
    shoproute.route('/createcategory').post(authController.authToken, function (req, res) {
        shopController.createcategory(req, res);
    })
    shoproute.route('/getproductbycategoryname').post(authController.authToken, function (req, res) {
        shopController.getproductbycategoryname(req, res);
    })
    shoproute.route('/getallcategories').post(authController.authToken, function (req, res) {
        shopController.getallcategories(req, res);
    })
    return shoproute;
}
module.exports = router;