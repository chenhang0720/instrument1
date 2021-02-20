var express = require('express');
var router = express.Router();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Instrument.db');

router.post("/",function(req,res){
    //  console.log(req.body);
    sql = `insert into Users values(${req.body.id}, ${req.body.account},${req.body.email}, ${req.body.Identity}, ${req.body.createtime}, ${req.body.updatetime})`
    db.run(sql);
    db.close();
});


module.exports = router;
