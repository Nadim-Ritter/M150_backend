var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeDb"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

function getProduct(id){
    var db = req.con;
	var data = "";
	db.query('SELECT name, id, description FROM product where id=' + id,function(err,rows){
		
    console.log(rows);
    var data = rows;
    console.log("product: " + data.id);

    return res.render('product', { title: 'product', dataGet: data });
	});
}

function login(){
    var db = req.con;
	var data = "";
	db.query('SELECT * FROM user',function(err,rows){
		
    console.log(rows);
    var data = rows;
    console.log("user " + data.id);
    return res.render('userIndex', { title: 'User Information', dataGet: data });
	});
}

function sendOrder(){

    var db = req.con;
	var data = "";
	db.query('INSERT INTO Order (newOrder) VALUES (' + order + ')',function(err,rows){
		
    console.log(rows);
    var data = rows;
    console.log("order" + data.id);
    return res.render('order', { title: 'order', dataGet: data });
	});

}

function getCategory(id){
    var db = req.con;
	var data = "";
	db.query('SELECT category, id, FROM product where id=' + id,function(err,rows){
		
    console.log(rows);
    var data = rows;
    console.log("category: " + data.id);
    
    return res.render('category', { title: 'category', dataGet: data });
	});
}

moudule.exports.getProduct  = getProduct;
moudule.exports.login       = login;
moudule.exports.sendOrder   = sendOrder;
moudule.exports.getCategory = getCategory;