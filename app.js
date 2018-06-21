var express 		    = require('express');
var app			        = express();	
var request			    = require('request');
var bodyParser          = require('body-parser');
var myPort= process.env.PORT || 3000;
app.post('/botHandler',function(req,res){
console.log("MY request body",req.body);
})
app.listen(myPort);
