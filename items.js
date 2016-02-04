'use strict';

var psql = require('./database_connection.js')

function getAll(cb) {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories date FROM consumption;';
  psql.dbConnection(allConsumption, cb);
}

function add(params, cb) {
  var data = {};
  var wichUser = 'SELECT user_id FROM users WHERE name=?';
  psql.dbConnection(wichUser, params.body.user, function(err, result){
    if (params.body.date !== '') {
      data = {
        cons_name: params.body.name, 
        cons_calories: params.body.calories,
        date: params.body.date,
        user_id: result[0].user_id
      };
    } else {
      data = {
        cons_name: params.body.name,
        cons_calories: params.body.calories,
        user_id: result[0].user_id
      };
    }
  });
  psql.dbConnection(data, cb);
}

module.exports = {
  getAll: getAll,
  add: add
};
