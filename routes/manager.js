var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/favicon',function(req,res,next){
	res.send("don't Use");
})

module.exports = router;
