'use strict';
var pg = require('pg');
var url = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/epam_calorie_app';
console.log(url);

function dbConnection(task, callback) {
  console.log(task);
  pg.connect(url, function(err, client, done) {
    client.query(task, function(err, result) {
      done();
      callback(err, result);
    });
  });
}

module.exports = {
  dbConnection: dbConnection
};
