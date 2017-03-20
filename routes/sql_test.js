var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var path = require('path');
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(1234);
  var db = req.con;
  var data = "";
  db.query('SELECT * FROM user',function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
    var data = rows;
    console.log("Outside--"+data.account);
    // res.render('userIndex', { title: 'User Information', dataGet: data });
    res.render('users', { title: 'Drink2 system' , title2: 'test' , dataGet: data});

  });
  // res.send('respond with a resource');
});

module.exports = router;
