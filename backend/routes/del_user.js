var express = require('express');
var router = express.Router();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Instrument.db');

router.post("/",function(req,res){
    console.log(req.body);
    // console.log(req.body.id);
    // console.log(typeof(req.body.id));
    // sql = `delete from Users where id = ${req.body.id}`;
    // console.log(sql);
    // db.run(sql);
});


module.exports = router;
