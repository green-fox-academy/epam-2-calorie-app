'use strict';
var pg = require('pg');
var url = process.env.DATABASE_URL;

function getAllUsers(req, res) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  dbConnection(allUsers, function (err, result) {
    if (err)
     {
       console.error(err);
       res.send('Error ' + err);
     }
    else
     {
       res.json(result.rows);
     }
  });
}

function getAllConsumption(req, res) {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories date FROM consumption;';
  dbConnection(allConsumption, function (err, result) {
    if (err)
     {
       console.error(err);
       res.send('Error ' + err);
     }
    else
     {
       res.json(result.rows);
     }
  });
}

function dbConnection(task, callback) {
  pg.connect(url, function(err, client, done) {
    client.query(task, function(err, result) {
      done();
      callback(err, result);
    });
  });
}

module.exports = {
  getAllUsers: getAllUsers,
  getAllCons: getAllConsumption
};
