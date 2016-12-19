var express = require('express');
var router = express.Router();
var db = require('../modules/db.js');
var connect = db.connect;

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource');
});
router.get('/getBanner', function(req, res, next) {
	var queryString  = "select * from banner_index"
	connect.query(queryString,function(err,rows,fileds){
		if(err){
			next(err);
		}else{
			var result = {};
			result.code = 200;
			result.data = rows;
			res.json(result);
		}
	})
});
router.get('/getGoodList', function(req, res, next) {
	var queryString  = "select * from goods"
	connect.query(queryString,function(err,rows,fileds){
		if(err){
			next(err);
		}else{
			var result = {};
			result.code = 200;
			result.data = rows;
			res.json(result);
		}
	})
});

module.exports = router;
