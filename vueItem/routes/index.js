var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/vue';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/prolist",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var db=db.db('vue');

    // var result=req.query;
    // console.log(result);
    // res.send("222")
    db.collection('product').find({}).toArray(function(err,result){
      // console.log(data);
      res.send(result)
    })
  })
})
module.exports = router;



