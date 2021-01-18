module.exports = function(sequelize,DataType){
	return sequelize.define('tbl_users',{
		id : {
            type: DataType.INTEGER,
			autoIncrement: true,
			allowNull:false,
            primaryKey: true
        },
        firstName:{
			type : DataType.STRING,
			allowNull : true	
        },
        lastName:{
			type : DataType.STRING,
			allowNull : true	
		},
		email:{
			type:DataType.STRING,
			allowNull:true
        },
        phoneno:{
			type:DataType.STRING,
			allowNull:false
        },
        gender:{
			type:DataType.STRING,
			allowNull:true
        },
        age:{
			type:DataType.STRING,
			allowNull:true
		},
        password:{
			type : DataType.STRING,
			allowNull : true	
        },
        imageUrl:{
			type:DataType.STRING,
			allowNull:true
        },
        googleId:{
			type:DataType.STRING,
			allowNull:true
        },
        fbId:{
			type:DataType.STRING,
			allowNull:true
        },
        ip:{
			type:DataType.STRING,
			allowNull:true
        },
        country:{
			type:DataType.STRING,
			allowNull:true
        },
        region:{
			type:DataType.STRING,
			allowNull:true
        },
        zip:{
			type:DataType.STRING,
			allowNull:true
        },
        latitude:{
			type:DataType.STRING,
			allowNull:true
        },
        longitude:{
			type:DataType.STRING,
			allowNull:true
        },
        otp:{
			type:DataType.STRING,
			allowNull:true
        },
        emailVerificationKey:{
			type:DataType.STRING,
			allowNull:true
        },
        isVerified:{
			type:DataType.BOOL,
			allowNull:true
        },
        forgotPasswordKey:{
			type:DataType.STRING,
			allowNull:true
        },
        role:{
			type:DataType.BOOL,
			allowNull:true
        },
        allowNotification:{
			type:DataType.BOOL,
			allowNull:true
        },
        isDeleted:{
			type:DataType.BOOL,
			allowNull:true
        },
        isActive:{
			type:DataType.BOOL,
			allowNull:true
        },
        createdOn:{
			type:DataType.DATE,
			allowNull:true
		},
    },{
		tableName : "tbl_users"
	});
}