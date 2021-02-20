var express = require('express');
var router = express.Router();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Instrument.db');


router.get('/', function (req, res) {
  results = [];
  db.all("SELECT * from Users", function (err, rows) {
    rows.map((row) => {
      results.push({
        "id": row.id,
        "account": row.account,
        "email": row.email,
        "Identity": row.Identity,
        "createtime": row.createtime,
        "updatetime": row.updatetime
      })
    });
    res.json(results);
  });
});




/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/', function (req, res, next) {
//   res.send(data);
// });

module.exports = router;
