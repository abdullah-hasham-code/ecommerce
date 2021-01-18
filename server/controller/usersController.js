var sequelize = require('../sequelizeConfig').sequelizeConfig;
var models = require("../models/models")();
var users = models.users;
exports.getusers = async (req, res) => {
    query="select * from tbl_users";
    users.query(query);
    console.log(query);
    // if (rows.length > 0) res.status(200).send({ status: "OK", message: "Record found!", data: rows, count });
    // else res.status(200).send({ status: "FAIL", message: "No data found!" });
}