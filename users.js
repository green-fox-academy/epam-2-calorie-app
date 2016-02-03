'use strict';

var psql = require('./database_connection.js');

function getAll(cb) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  psql.dbConnection(allUsers, cb);
}

module.exports = {
  getAll: getAll
};
