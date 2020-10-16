//jshint esversion:6
require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();
const ejs = require("ejs");
const router = require("router");
const Nexmo = require("nexmo");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const serverless = require('serverless-http');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(parser.urlencoded({extended: true}));

////////////////////SMS TEXT APP////////////////////////////
const nexmo = new Nexmo({
 apiKey: "a7e88e4f",
 apiSecret: "XSaGLjVCMiibi07M"
});


////////////////SMS TEST APP ENDS
var style = " ";
var response = " ";

app.set('trust proxy', true)

//RENDERING HOME
app.get("/", function(req, res){
	res.redirect("/home.php");
})

app.get("/home.php", function(req, res){
	style = "";
response = "";

var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
console.log(ip);

console.log("Req.ip " + req.ip + " Req.ips "+ req.ips)

	res.render("home", {style: style, response: response});


});

app.get("/home.php", function(req, res){
	res.redirect("/home.php");
})

app.post("/home.php", function(req, res){
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

console.log(name + "  " + email + " " + message); 

/////////////////SENDING OFF TO THE SMS 
//   const sender = req.body.name;
//   const to = "2348149130392";
//   const text = req.body.email+" "+req.body.message;
//   nexmo.message.sendSms(sender, to, text);
// //WORKING ON THE SMS RETURN
///////////////////////////////////////


var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
 auth: {
    user: 'christianovik009@gmail.com',
    pass: 'Olateju2018'
  }
}));



var mailOptions = {
  to: email,
  from : 'Olateju Victor Daniel',
  subject: 'Thank you',
  text: 'Olateju Victor Daniel',
  html: "<h1>Olateju Victor Daniel</h1> <p>Thank you for leaving message, i will try to give a response as soon as possible. Thanks</p>" + 
  "\n <a href='http://Olateju-victor-daniel.tk'>Olateju-victor-daniel.tk</a>"
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

var transported = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
 auth: {
    user: 'christianovik009@gmail.com',
    pass: 'Olateju2018'
  }
}));



var mailOption = {
  to: "christianovik009@gmail.com",
  from : 'Olateju Victor Daniel',
  subject: 'Thank you',
  text: 'Olateju Victor Daniel' + email,
  html: "<h1>Olateju Victor Daniel</h1> <p>You recieved a mail</p>"
}

transported.sendMail(mailOption, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})


console.log("sent " + name + " to " + email);
style = "alert-success";
response = "Your Message has been recieved, do check your email for confirmation";
res.render("home", {style: style, response: response});
})

//RENDERING REGISTER
app.get("/register", function(req, res){
  res.render("register", {responses: errs, fnameErrs: fnameErr, lnameErrs: lnameErr,
   emailErrs: emailErr, pass1Errs: pass1Err});
});

//************************************************
//RENDERING ADMIN LOGIN****************************
app.get("/admin", function(req, res){
  res.render("admin", {responses: errs});
});

//RENDERING ADMIN LOGIN*************************
//**************************************************

//**********************************************
//RENDERING LOGIN ROUTE************************
app.route("/login")
  .get(function(req, res){
	res.render("login", {responses: errs});
})


//ERROR 404 OUTLINE//////////////////////////////////////////////////////
app.use(function(req, res, next){
 res.redirect("/");
 //res.redirect("/")
})

app.use(function(err, req, res, next){
 console.error(err.stack);
 res.redirect("/")
 // res.redirect("/")
})



// let port = process.env.PORT;
// if(port == null || port == ""){
//   port = 5000;
// }

let port = process.env.PORT;
if(port == null || port == ""){
  port = 5000;
}

module.exports = app;
module.exports.handler = serverless(app)

//app.listen(port, function() {
 //console.log("5000: Server started on port successfully.");
//});

