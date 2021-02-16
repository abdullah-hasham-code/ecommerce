var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var multer  = require('multer');
exports.createshop = async (req, res) => {
    var decode = jwt.decode(req.headers.token, "secret");
    if (req.body.shopName == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Name" });
    if (req.body.shopDescription == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Description" });
    if (req.body.shopCategory == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Category" });
    if (req.body.shopCity == '') res.status(200).send({ status: "OK", message: "Please fill the Shop City" });
    if (req.body.shopFor == '') res.status(200).send({ status: "OK", message: "Please fill the Shop For" });
    if (req.body.shopUrl == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Url" });
    if (req.body.shopLogo == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Logo" });
    shopLogo="../../src/assets/shopimages/"+req.body.shopLogo;
    var image = new Buffer.from(shopLogo, 'base64').toString('binary');
    checkShopExist = "select * from tbl_shops where shopName='" + req.body.shopName + "'";
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    if (checkShopExistRes.length > 0) res.status(403).send({ status: "OK", message: "There is another shop exist " })
    else {
        console.log(image)
        createShop = "insert into tbl_shops (userId,shopName,shopDescription,shopCategory,shopCity,shopFor,shopUrl,shopLogo) values('" + decode.id + "','" + req.body.shopName + "','" + req.body.shopDescription + "','" + req.body.shopCategory + "','" + req.body.shopCity + "','" + req.body.shopFor + "','" + req.body.shopUrl + "','" + image + "')";
        createShopRes = sequelize.query(createShop);
        if (createShopRes) res.status(403).send({ status: "OK", message: "Your shop has been created successfully!" })
    }
}
exports.checkshopexist = async (req, res) => {
    var decode = jwt.decode(req.headers.token, "secret");
    checkShopExist = "select * from tbl_shops where userId='" + decode.id + "'";
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    if (checkShopExistRes.length > 0) res.status(200).send({ status: "OK", message: "shop found!" });
    else res.send({ status: "FAIL", message: "No shop found!" });
}
exports.createproduct = async (req, res) => {
    if (req.body.productName == '' || req.body.productName == undefined || req.body.productName == null) res.status(200).send({ status: "OK", message: "Please fill Product Name" });
    if (req.body.productCategory == '' || req.body.productCategory == undefined || req.body.productCategory == null) res.status(200).send({ status: "OK", message: "Please fill Product Category" });
    if (req.body.productDescription == '' || req.body.productDescription == undefined || req.body.productDescription == null) res.status(200).send({ status: "OK", message: "Please fill Product Description" });
    if (req.body.marketPrice == '' || req.body.marketPrice == undefined || req.body.marketPrice == null) res.status(200).send({ status: "OK", message: "Please fill Market Price" });
    if (req.body.ourPrice == '' || req.body.ourPrice == undefined || req.body.ourPrice == null) res.status(200).send({ status: "OK", message: "Please fill Our Price" });
    var decode = jwt.decode(req.headers.token, "secret");
    checkShopExist = "select * from tbl_shops where userId =" + decode.id;
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    checkProd = "select * from tbl_products where productName='" + req.body.productName + "'";
    checkProdRes = await sequelize.query(checkProd, { type: sequelize.QueryTypes.SELECT });
    if (checkProdRes.length > 0) res.status(403).send({ status: "OK", message: "The product already exist with the same name. Please use different one!" });
    else {
        createProd = "insert into tbl_products (shopId,userId,productName,productCategory,productDescription,marketPrice,ourPrice) values('" + checkShopExistRes[0].shopId + "','" + decode.id + "','" + req.body.productName + "','" + req.body.productCategory + "','" + req.body.productDescription + "','" + req.body.marketPrice + "','" + req.body.ourPrice + "')";
        createProdRes = await sequelize.query(createProd);
        if (createProdRes) res.status(403).send({ status: "OK", message: "Product has been created successfully!" });
        else res.status(403).send({ status: "OK", message: "Error creating the product" })
    }
}
exports.getproductbycategoryname = async (req, res) => {
    if (req.body.categoryName == '' || req.body.categoryName == undefined || req.body.categoryName == null) res.status(200).send({ status: "OK", message: "Please fill Category Name" });
    checkCategory = "select * from tbl_category where categoryName= '" + req.body.categoryName + "'";
    if (req.body.categoryName == '' || req.body.categoryName == undefined || req.body.categoryName == null) {
        res.status(200).send({ status: "OK", message: "Please fill Category Name" });
        return;
    }
    checkCategory = "select * from tbl_products,tbl_category WHERE tbl_category.categoryName=tbl_products.productCategory and tbl_category.categoryName='" + req.body.categoryName + "' ORDER BY productName asc limit " + req.body.limit + " offset " + req.body.offset + "";
    checkCategoryRes = await sequelize.query(checkCategory, { type: sequelize.QueryTypes.SELECT });
    if (checkCategoryRes.length > 0) res.status(403).send({ status: "OK", message: "Category fetched successfully!", data: checkCategoryRes });
    else res.status(403).send({ status: "FAIL", message: "No records found!" });
}
exports.createcategory = async (req, res) => {
    if (req.body.categoryName == '' || req.body.categoryName == undefined || req.body.categoryName == null) {
        res.status(200).send({ status: "OK", message: "Please fill Category Name" });
        return;
    }
    checkCategory = "select * from tbl_category where categoryName= '" + req.body.categoryName + "'";
    checkCategoryRes = sequelize.query(checkCategory, { type: sequelize.QueryTypes.SELECT });
    if (checkCategoryRes.length > 0) res.status(403).send({ status: "OK", message: "This category type already exist. Please use different category!" })
    else {
        insertCategory = "insert into tbl_category(categoryName) values('" + req.body.categoryName + "')";
        insertCatetgoryRes = sequelize.query(insertCategory, { type: sequelize.QueryTypes.SELECT })
        if (insertCatetgoryRes) res.status(403).send({ status: "OK", message: "Category has been addedd successfully!" });
        else res.status(403).send({ status: "FAIL", message: "Error creating Category!" })
    }
}
exports.getallcategories = async (req, res) => {
    if (req.body.categoryId == '' || req.body.categoryId == undefined || req.body.categoryId == null) res.status(200).send({ status: "OK", message: "Please fill Category Id" });
    checkCategory = "select * from tbl_category where categoryId=" + req.body.categoryId;
    checkCategoryRes = await sequelize.query(checkCategory, { type: sequelize.QueryTypes.SELECT });
    if (checkCategoryRes.length > 0) res.status(403).send({ status: "OK", message: "Category fetched successfully!", data: checkCategoryRes });
    else res.status(403).send({ status: "FAIL", message: "No records found!" });
}
