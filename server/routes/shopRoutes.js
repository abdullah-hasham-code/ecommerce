var express = require('express');
var shoproute = express.Router();
var shopController = require('../controller/shopController');
var authController = require('../controller/authController');
var multer = require('multer');
var upload = multer({ dest: '/assets' });
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/');
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'shopImage' + Date.now() + '.' + filetype);
    }
});
var upload = multer({ storage: storage });
var router = () => {
    shoproute.route('/createshop').post(authController.authToken, function (req, res) {
        shopController.createshop(req, res);
    })
    shoproute.route('/getallshops').post(function (req, res) {
        shopController.getallshops(req, res);
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
    shoproute.route('/getallproducts').post(function (req, res) {
        shopController.getallproducts(req, res);
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
    shoproute.route('/upload').post(authController.authToken, upload.single('file'), function (req, res) {
        console.log(req.file);
        if (!req.file) {
            res.status(500);
        }
        res.send({ fileUrl: 'http://localhost:3030/assets/' + req.file.filename });
    })
    return shoproute;
}
module.exports = router;