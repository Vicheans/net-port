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
//RENDERING HOME
app.get("/", function(req, res){
	res.redirect("/home.php");
})

app.get("/home.php", function(req, res){
	style = "";
response = "";

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
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'christianovik009@gmail.com',
    pass: 'Olateju2018'
  }
})

var mailOptions = {
  from: 'Olateju Victor Daniel',
  to: email,
  subject: 'Thanks for Reaching out',
  text: 'Thanks For contacting Victor!',
  html: "<h1>Header here bruh</h1>"
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
//////////////////////////
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'christianovik009@gmail.com',
    pass: 'Olateju2018'
  }
})

var mailOptions = {
  from: 'Olateju Victor Daniel',
  to: "christianovik009@gmail.com",
  subject: 'You just recieved an email from ' + name + " with email " + email,
  text: 'I think you should respond to this urgently',
  html: "<h1>Header here bruh</h1>"
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

console.log("sent " + name + " to " + to);
style = "alert-success";
response = "Your Message has been recieved, do check your email for confirmation";
res.render("home", {style: style, response: response});
})





app.get("/about.php", function(req, res){
	res.sendFile(__dirname + "/views/about.html");
});

app.get("/services.php", function(req, res){
	res.sendFile(__dirname + "/views/services.html");
});

app.get("/news.php", function(req, res){
	res.sendFile(__dirname + "/views/news.html");
});

app.get("/contact.php", function(req, res){
	res.sendFile(__dirname + "/views/contact.html");
});

app.get("/admin.php", function(req, res){
	res.sendFile(__dirname + "/views/login.html");
});

app.get("/database.php", function(req, res){
	res.sendFile(__dirname + "/views/panel.html");
});

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



app.listen(5000, function() {
  console.log("Server started on port 5000.");
});

