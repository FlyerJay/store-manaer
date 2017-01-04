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
			result.code = 200;
			result.data.list = banners;
		}else{
			result.code = 200;
			result.errorinfo = {
				msg:"查询数据为空",
			}
		}
		res.json(result);
	})
});

router.post('/banner', function(req, res, next) {
	models.Banner.findAll().then(function(banners){
		if(banners.length>0){
			result.code = 200;
			result.data.list = banners;
		}else{
			result.code = 200;
			result.errorinfo = {
				msg:"新增数据出错",
			}
		}
		res.json(result);
	})
});

router.get('/banner/:id', function(req, res, next) {
	var id = req.params.id;
	models.Banner.findOne({
		where:{
			bannerId:{
				$eq:id
			}
		}
	}).then(function(banners){
		if(banners){
			result.code = 200;
			result.data = banners;
		}else{
			result.code = 200;
			result.data = ""
			result.errorinfo = {
				msg:"未获取到资源",
			}
		}
		res.json(result);
	})
});

router.delete('/banner/:id', function(req, res, next) {
	models.Banner.findOne({
		where:{
			bannerId:{
				$eq:1
			}
		}
	}).then(function(banners){
		if(banners){
			result.code == 200;
			result.data = banners;
		}else{
			result.code == 200;
			result.errorinfo = {
				msg:"未获取到资源",
			}
		}
		res.json(result);
	})
});

router.patch('/banner/:id/update', function(req, res, next) {
	models.Banner.findOne({
		where:{
			bannerId:{
				$eq:1
			}
		}
	}).then(function(banners){
		if(banners){
			result.code == 200;
			result.data.list = banners;
		}else{
			result.code == 200;
			result.errorinfo = {
				msg:"未获取到资源",
			}
		}
		res.json(result);
	})
});

router.get('/goods', function(req, res, next) {
	models.Goods.findAll().then(function(goods){
		if(goods.length>0){
			result.code == 200;
			result.data.list = goods
		}else{
			result.code == 200;
			result.errorinfo = {
				msg:"查询数据为空",
			}
		}
		res.json(result);
	})
});

router.get('/goods/:id', function(req, res, next) {
	var id = req.params.id;
	models.Goods.findOne({
		where:{
			goodId:{
				$eq:id,
			},
		}
	}).then(function(good){
		if(good){
			result.code == 200;
			result.data = goods
		}else{
			result.code = 200;
			result.data = ""
			result.errorinfo = {
				msg:"未获取到资源",
			}
		}
		res.json(result);
	})
});

module.exports = router;
