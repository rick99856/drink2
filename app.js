var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('cookie-sessions');
var mysql = require("mysql");
//MYSQL 連線
// var con = mysql.createConnection({
//     host: "mdb.stu.edu.tw",
//     user: "s13113241",
//     password: "hs9m322x",
//     database: "ecc_drink"
// });
//
// con.connect(function(err) {
//     if (err) {
//         console.log('connecting error');
//         return;
//     }
//     console.log('connecting success');
// });


var index = require('./routes/index');
// var order = require('./routes/order');
var admin = require('./routes/admin');
var normal = require('./routes/normal');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirna me, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/' , index);
app.use('/admin' , admin);
app.use('/normal' , normal);
app.use('/api' ,api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(err, req, res, next) {
  // req.con = con;
  next();
});


module.exports = app;
