'use strict';
var pg = require('pg');
var url = process.env.DATABASE_URL;

function getAllUsers(req, res) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  dbConnection(allUsers, function (res) {
    return res;
  });
}

function getAllConsumption() {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories date FROM consumption;';
  dbConnection(allConsumption, function (res) {
    return res;
  });
}

function dbConnection(task, callback) {
  pg.connect(url, function(err, client, done) {
    client.query(task, function(err, result) {
      done();
      if (err)
       {
         console.error(err);
         callback.send('Error ' + err);
       }
      else
       {
         callback.json(result.rows);
       }
    });
  });
}

module.exports = {
  getAllUsers: getAllUsers,
  getAllCons: getAllConsumption
};
