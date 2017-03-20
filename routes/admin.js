var express = require('express');
var router = express.Router();
var http = require('http');
var url = require('url');
var qs = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
var session = require('express-session');
var mysql = require("mysql");

/* GET home page. */
console.log(2345);
//mysql connect
var connection = mysql.createConnection({
    host: "mdb.stu.edu.tw",
    user: "s13113241",
    password: "hs9m322x",
    database: "ecc_drink"
});
router.use(session({
  secret: 'rick7320', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 * 100 },
  resave:true,
  saveUninitialized: true
}));




router.get('/order', function(req, res, next) {
  // res.render('admin/order', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:req.session.uname});

  connection.query("Select * from `order` ORDER BY `order`.`date` DESC", function(err , rows , fields){
    if(err){
      console.log(err);
    }
    console.log(rows);
    var name = req.session.name;
    var data = rows;
    res.render('admin/order' , {title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:name,data: data});
  });



  res.render('admin/order', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});

});
router.get('/record', function(req, res, next) {

  res.render('admin/record', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:req.session.uname});
});
router.get('/store', function(req, res, next) {

  res.render('admin/store', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:req.session.uname});
});
router.get('/menu', function(req, res, next) {

  res.render('admin/menu', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:req.session.uname});
});
router.get('/permissions', function(req, res, next) {

  res.render('admin/permissions', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統' , name:req.session.uname});
});

module.exports = router;
