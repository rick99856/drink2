var express = require('express');
var router = express.Router();
var http = require('http');
var url = require('url');
var qs = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
var mysql = require('mysql');
// session用
var session = require('express-session');
var app = express();
/* GET home page. */
// console.log(1234);
var mysql = require('mysql');


router.use(session({
  secret: 'rick7320', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 * 100 },
  resave:true,
  saveUninitialized: true
}));

router.get('/', function(req, res, next) {

    if(req.session.error=="帳密錯誤"){
      console . log (req . session.error );
      // req.session.logout("error");
      delete req.session.error;
      console . log (req . session );
      res.render('index', { title: 'Drink2' , error:"帳密錯誤" });
    }
    else if(req.session.error=="沒有進入的權限"){
      delete req.session.error;
      console . log (req . session );
      res.render('index' , { title: 'Drink2' , error:"沒有進入的權限"});
    }
    else{
      console . log (req . session );
      res.render('index', { title: 'Drink2' , error:"" });
    }


  // }
  // else{
  //   res.render('index', { title: 'Drink2' , error : "1"});
  // }
});


module.exports = router;
