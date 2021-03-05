var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var multer = require('multer')
var upload = multer({ dest: '../../src/assets/shopimages' })
exports.createshop = async (req, res) => {
    var decode = jwt.decode(req.headers.token, "secret");
    if (req.body.shopName == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Name" });
    if (req.body.shopDescription == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Description" });
    if (req.body.shopCategory == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Category" });
    if (req.body.shopCity == '') res.status(200).send({ status: "OK", message: "Please fill the Shop City" });
    if (req.body.shopFor == '') res.status(200).send({ status: "OK", message: "Please fill the Shop For" });
    if (req.body.shopLogo == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Url" });
    if (req.file == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Logo" });
    checkShopExist = "select * from tbl_shops where shopName='" + req.body.shopName + "'";
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    if (checkShopExistRes.length > 0) res.status(403).send({ status: "OK", message: "There is another shop exist " })
    else {
        createShop = "insert into tbl_shops (userId,shopName,shopDescription,shopCategory,shopCity,shopFor,shopUrl,shopLogo) values('" + decode.id + "','" + req.body.shopName + "','" + req.body.shopDescription + "','" + req.body.shopCategory + "','" + req.body.shopCity + "','" + req.body.shopFor + "','" + req.body.shopUrl + "','" + req.body.shopLogo + "')";
        createShopRes = sequelize.query(createShop);
        if (createShopRes) res.status(200).send({ status: "OK", message: "Your shop has been created successfully!" })
    }
}
exports.checkshopexist = async (req, res) => {
    var decode = jwt.decode(req.headers.token, "secret");
    checkShopExist = "select * from tbl_shops where userId='" + decode.id + "'";
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    if (checkShopExistRes.length > 0) res.status(200).send({ status: "OK", message: "shop found!" });
    else res.send({ status: "FAIL", message: "No shop found!" });
}
exports.getallshops = async (req, res) => {
    shopsQuery = "select * from tbl_shops";
    if (req.body.shopId) shopsQuery += " where shopId=" + req.body.shopId;
    shopsQuery += " ORDER BY shopId desc";
    shopsRes = await sequelize.query(shopsQuery, { type: sequelize.QueryTypes.SELECT });
    if (shopsRes.length > 0) res.status(200).send({ status: "OK", message: "Shops fetched successfully!", data: shopsRes });
    else res.status(403).send({ status: "OK", message: "No shops found!" });
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
exports.getallproducts = async (req, res) => {
    limit = 10, offset = 0
    prodQuery = "select * from tbl_products";
    if (req.body.limit) limit = req.body.limit;
    if (req.body.offset) offset = req.body.offset;
    prodQuery += " ORDER BY productId desc limit " + limit + " offset " + offset + "";
    console.log(prodQuery.length)
    prodRes = await sequelize.query(prodQuery, { type: sequelize.QueryTypes.SELECT });
    if (prodRes.length > 0) res.status(200).send({ status: "OK", message: "Products fetched successfully!", count: prodRes.length, data: prodRes });
    else res.status(403).send({ status: "OK", message: "No products found!" });
}
exports.getproduct = async (req, res) => {
    var limit = 10, offset = 0
    if (req.body.limit) limit = req.body.limit;
    if (req.body.offset) offset = req.body.offset;
    var prodQuery = "select * from tbl_products";
    if (req.body.productId || req.body.categoryId || req.body.productName) prodQuery += " where "
    if (req.body.productId) prodQuery += "productId=" + req.body.productId;
    console.log(prodQuery);
    if (req.body.productId && req.body.categoryId) prodQuery += " AND "
    if (req.body.categoryId) prodQuery += "categoryId=" + req.body.categoryId;
    if ((req.body.productId || req.body.categoryId) && req.body.productName) prodQuery += " AND "
    if (req.body.productName) prodQuery += " productName=" + req.body.categoryId;
    prodQuery += " ORDER BY productId desc limit " + limit + " offset " + offset + "";
    prodRes = await sequelize.query(prodQuery, { type: sequelize.QueryTypes.SELECT });
    if (prodRes.length > 0) res.status(200).send({ status: "OK", message: "Products fetched successfully!", count: prodRes.length, data: prodRes });
    else res.status(200).send({ status: "FAIL", message: "No products found!" });
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
    // if (req.body.categoryId == '' || req.body.categoryId == undefined || req.body.categoryId == null) res.status(200).send({ status: "OK", message: "Please fill Category Id" }); where categoryId=" + req.body.categoryId;
    checkCategory = "select * from tbl_category";
    checkCategoryRes = await sequelize.query(checkCategory, { type: sequelize.QueryTypes.SELECT });
    if (checkCategoryRes.length > 0) res.status(200).send({ status: "OK", message: "Category fetched successfully!", data: checkCategoryRes });
    else res.status(403).send({ status: "FAIL", message: "No records found!" });
}
