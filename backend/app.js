//mongoose

var mongoose = require("mongoose");

//express js code
var express = require("express");
var cors = require("cors");
var app = express();
app.set("port", process.env.PORT || 5000);
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("cors")());
app.listen(app.get("port"));

//Model
var userLogin = require("./models/login");

app.post("/addUser", (req, res) => {
  var responseObj = {};
  var id = req.body.id;
  var pwd = req.body.pwd;
  function addUserFunction() {
    return new Promise((resolve, reject) => {
      var userLoginObj = new userLogin({
        id: id,
        pwd: pwd,
      });
      userLoginObj
        .save()
        .then((res1) => {
          resolve();
        })
        .catch((err) => {
          console.log("error in addUserFunction" + err);
          reject("error in register");
        });
    });
  }
  function sendResponse() {
    return new Promise((resolve, reject) => {
      responseObj.status = "success";
      responseObj.message = "User added successfully";
      res.json(responseObj);
    });
  }
    addUserFunction()
    .then(sendResponse)
    .catch((err) => {
        // console.log("error in addUserFunction" + err);
        responseObj.status = "error";
        responseObj.message = "Error in adding user";
        res.json(responseObj);
        });
});
