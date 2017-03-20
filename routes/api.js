var express = require('express');
var router = express.Router();
var http = require('http');
var url = require('url');
var qs = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
// session
var session = require('express-session');
var app = express();
var mysql = require("mysql");
//MYSQL 連線
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

router.get('/', function(req, res , next) {

});


router.post('/login', function(req, res) {
  // var session = req.session;

  var account = req.body.account;
	var password = req.body.password;
  var stu_acc = "http://stu-acc.api.stu.edu.tw/acc/auth/apikey/4fa30cf8e40242ec4f320f11eeccb21db8bc2c4e/";
  stu_acc+= "uacc/"+account+"/upwd/"+password;
  var info = "";
  // console.log(stu_acc);
  var obj = "";
  request(stu_acc, function(error, response, html){
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        info = html;
        var $ = cheerio.load(html);
        console.log(html);
        obj = JSON.parse(html);
        var status = obj["status"];
        var uname = obj["uname"];
        if(status =="0"){
          console.log("login");
          req.session.uname = uname ;
          // connection.connect();
          connection.query("Select * from `user` where `name` = '"+ uname+"'  and `status` = 'alive' ", function(err , rows , fields){
            if(err){
              console.log(err);
            }
            console.log(rows);

            if(rows == ""){
              req.session.error="沒有進入的權限";
              console.log("cannot in");
              // connection.end();
              res.redirect('../../');

            }
            else{
              if(rows[0].authority =="admin"){
                res.redirect('../../admin/order');
              }
              else{
                res.redirect('../../normal/order');
              }
            }
            // else{
            //   // connection.end();
            //   res.redirect('../../admin/order');
            // }
              // res.render('admin/order', { title: 'Drink2' , title2: '電算中心成員都能用的訂餐系統'});
              // res.render('admin', { title: 'Drink2 system' , title2: 'test'});

          });

        }
        else{
          console.log(req.session);
          req.session.error= "帳密錯誤" ;
          res.redirect('../../');

        }
    });

});

module.exports = router;
