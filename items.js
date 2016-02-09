'use strict';

var psql = require('./database_connection.js')

function getAll(psql, cb) {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories, date FROM consumption;';
  psql.dbConnection(allConsumption, cb);
}

function deleteItem(psql, id, cb) {
  var query = 'DELETE FROM consumption WHERE cons_id = ' + id + ';';
  psql.dbConnection(query, cb);
}

// function add(params, cb) {
//   if (params.body.date !== '') {
//     var post = 'INSERT INTO consumption (cons_name, cons_calories, date, user_id) VALUES (' +
//     + params.body.cons_name +','+ params.body.cons_calories +','+ params.body.date +','+ params.body.user_id + ');';
//     psql.dbConnection(post, cb);
//   } else {
//     var post = 'INSERT INTO consumption (cons_name, cons_calories, user_id) VALUES (' +
//     + params.body.cons_name +','+ params.body.cons_calories +','+ params.body.user_id + ');';
//     psql.dbConnection(post, cb);
//   }
// }

module.exports = {
  getAll: getAll,
  deleteItem: deleteItem
  // add: add
};
