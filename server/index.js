var  express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 3030;
var sequelize = require('./sequelizeConfig').sequelizeConfig;
var usrRoute = require("./routes/userRoutes")();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})
app.use('/api',usrRoute);

sequelize.authenticate().then(()=>{
   
    app.listen(port , function(err){
		if(err) console.log(err);
		console.log("port runnig on",port);
    })
    
    console.log("Connection has been established");
})
.catch(error=>{
    console.log("Unable to connect Database");    
})