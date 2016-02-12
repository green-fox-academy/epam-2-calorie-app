'use strict';

function getAll(connection, cb) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  connection.dbConnection(allUsers, cb);
}

module.exports = {
  getAll: getAll
};
