//mongoose 

var mongoose = require('mongoose');

//express js code 
var express = require('express');
var cors = require('cors');
var app = express();
app.set('port', (process.env.PORT || 5000));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("cors")());
app.listen(app.get("port"))

//Model
var login = require('./models/login');

app.post("/addUser", function(req, res){
    // console.log(req.body);
    var user = new login({
        id: req.body.id,
        pwd: req.body.pwd,
    });
    user.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.log("User added");
        }
    });
})