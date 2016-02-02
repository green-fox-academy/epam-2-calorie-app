'use strict';
var pg = require('pg');
var url = process.env.DATABASE_URL;

function getAll(req, res) {
  pg.connect(url, function(err, client, done) {
    client.query('SELECT * FROM consumption;', function(err, result) {
      done();
      if (err)
       { console.error(err); res.send('Error ' + err); }
      else
       { res.render('pages/db', {results: result.rows} ); }
    });
  });
}


module.exports = {
  getAll: getAll
};
