var Sequelize=require('sequelize');
var env_variable=process.env.NODE_ENV || "development";
var sequelize;
if(env_variable==="production")
{
sequelize=new Sequelize(process.env.DATABASE_URL,{
dialect:"postgres"
});
}
else{
sequelize=new Sequelize(undefined,undefined,undefined,{
"dialect":"sqlite",
"storage":__dirname+"/data/user-api.sqlite"
});	
}


var db={};
db.user=sequelize.import(__dirname+"/models/users.js");
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports=db;