var express = require('express');
var router = express.Router();
var http = require('http');
var url = require('url');
var qs = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
console.log(2345);

router.get('/', function(req, res, next) {

  res.render('order', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});
});

router.get('/orderlist', function(req, res, next) {

  res.render('orderlist', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});
});


module.exports = router;
