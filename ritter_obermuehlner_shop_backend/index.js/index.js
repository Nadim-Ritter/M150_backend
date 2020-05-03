var express = require('express');
var app = express();
const db = require("../db-calls");


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/login', function(req, res){
    var response = db.login();

    if(reponse.status == 200){
        res.json(response);
        res.status(200).send();
    }else{
        res.status(400).send();
    }
});

app.get('/getCategory', function(req, res){
    var response = db.getCategory();

    if(reponse.status == 200){
        res.json(response);
        res.status(200).send();
    }else{
        res.status(400).send();
    }
});

app.get('/getProduct', function(req, res){
    var response = db.getProduct();

    if(reponse.status == 200){
        res.json(response);
        res.status(200).send();
    }else{
        res.status(400).send();
    }
});


app.post('/order', function(req, res){
    var response = db.sendOrder();

    if(reponse.status == 200){
        res.json(response);
        res.status(200).send();
    }else{
        res.status(400).send();
    }

});

app.listen(4000, function () {
  console.log('Shop Oberritter listening on port 4000!');
});