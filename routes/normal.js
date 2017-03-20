var express = require('express');
var router = express.Router();
var http = require('http');
var url = require('url');
var qs = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
console.log(3456);


router.get('/order', function(req, res, next) {

  res.render('normal/order', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});
});
router.get('/record', function(req, res, next) {

  res.render('normal/record', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});
});


module.exports = router;
