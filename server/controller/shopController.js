var Sequelize = require('sequelize');
var sequelize = require('../sequelizeConfig').sequelizeConfig;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
exports.createshop = async (req, res) => {
    var decode = jwt.decode(req.headers.token, "secret");
    if (req.body.shopName == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Name" })
    if (req.body.shopDescription == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Description" })
    if (req.body.shopFor == '') res.status(200).send({ status: "OK", message: "Please fill the Shop For" })
    if (req.body.shopLogo == '') res.status(200).send({ status: "OK", message: "Please fill the Shop Logo" })
    checkShopExist = "select * from tbl_shops where shopName='" + req.body.shopName + "'";
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    if (checkShopExistRes.length > 0) res.status(403).send({ status: "OK", message: "There is another shop exist " })
    else {
        createShop = "insert into tbl_shops (userId,shopName,shopDescription,shopFor,shopLogo) values('" + decode.id + "','" + req.body.shopName + "','" + req.body.shopDescription + "','" + req.body.shopFor + "','" + req.body.shopLogo + "')";
        createShopRes = sequelize.query(createShop);
        if (createShopRes) res.status(403).send({ status: "OK", message: "Your shop has been created successfully!" })
    }
}
exports.createproduct = async (req, res) => {
    if (req.body.productName == '' || req.body.productName == undefined || req.body.productName == null) res.status(200).send({ status: "OK", message: "Please fill Product Name" });
    if (req.body.productDescription == '' || req.body.productDescription == undefined || req.body.productDescription == null) res.status(200).send({ status: "OK", message: "Please fill Product Description" });
    if (req.body.marketPrice == '' || req.body.marketPrice == undefined || req.body.marketPrice == null) res.status(200).send({ status: "OK", message: "Please fill Market Price" });
    if (req.body.ourPrice == '' || req.body.ourPrice == undefined || req.body.ourPrice == null) res.status(200).send({ status: "OK", message: "Please fill Our Price" });
    var decode = jwt.decode(req.headers.token, "secret");
    checkShopExist = "select * from tbl_shops where userId ="+ decode.id;
    console.log(checkShopExist)
    checkShopExistRes = await sequelize.query(checkShopExist, { type: Sequelize.QueryTypes.SELECT });
    console.log(checkShopExistRes)
    checkProd = "select * from tbl_products where productName='" + req.body.productName + "'";
    checkProdRes = await sequelize.query(checkProd, { type: sequelize.QueryTypes.SELECT });
    if (checkProdRes.length > 0) res.status(403).send({ status: "OK", message: "The product already exist with the same name. Please use different one!" });
    else {
        createProd = "insert into tbl_products (shopId,userId,productName,productDescription,marketPrice,ourPrice) values('" + checkShopExistRes[0].shopId + "','" + decode.id + "','" + req.body.productName + "','" + req.body.productDescription + "','" + req.body.marketPrice + "','" + req.body.ourPrice + "')";
        createProdRes = await  sequelize.query(createProd);
        if (createProdRes) res.status(403).send({ status: "OK", message: "Product has been created successfully!" });
        else res.status(403).send({ status: "OK", message: "Error creating the product" })

    }
}
