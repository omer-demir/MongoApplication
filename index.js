var http=require('http');
var express=require('express');
var vash=require('vash');

var app=express();

app.set('view engine','vash');
app.use(express.static(__dirname+'/public'));

var controllers=require('./controllers');
controllers.initializeControllers(app);


var server=http.createServer(app);
server.listen(3000);