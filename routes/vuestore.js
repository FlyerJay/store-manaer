var express = require('express');
var router = express.Router();
var models = require("../models");
//构造返回对象的实体，code默认为200，当有错误时会返回errorinfo，数据中有list时会返回pageinfo
var result = {
	code:200,
	errorinfo:"",
	data:{
		list:[],
	},
	pageinfo:""
}

router.get('/', function(req, res, next) {
  	res.send('can not get detail request!');
});

router.get('/banner', function(req, res, next) {
	models.Banner.findAll().then(function(banners){
		if(banners.length>0){
			result.code == 200;
			result.data.list = banners;
		}else{
			result.code == 200;
			result.errorinfo = {
				msg:"查询数据为空",
			}
		}
		res.json(result);
	})
});

router.get('/goods', function(req, res, next) {
	var queryString  = "select * from goods"
	connect.query(queryString,function(err,rows,fileds){
		if(err){
			result.code = 500;
			result.errorinfo = err;
			res.json(result);
		}else{
			result.code = 200;
			result.data.list = rows;
			res.json(result);
		}
	})
});

module.exports = router;
