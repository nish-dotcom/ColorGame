const express = require('express');
const app = express();
const path = require('path');
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+"/colorGame.html"));
});

app.get("/colorGame.css", function(req, res) {
    res.sendFile(__dirname + "/colorGame.css");
  });
app.get("/colorGame.js", function(req, res) {
    res.sendFile(__dirname + "/colorGame.js");
  });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
 });

// app.listen(3000, function(req,res){
// 	console.log("The Server has Started!")	   
// });
	