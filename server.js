var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var id=1;
var users=[];
var body_parser=require('body-parser');
var _=require('underscore');
var bcrypt=require('bcrypt');

//about route
app.get("/about",function(req,res){
res.send("made on request of Naeem Siddiq");
});

app.listen(PORT,function(){
	console.log("Listening on port"+PORT);
});