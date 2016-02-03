'use strict';

var psql = require('./database_connection.js')

function getAllUsers(cb) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  psql.dbConnection(allUsers, cb);
}

module.exports = {
  getAllUsers: getAllUsers
};
