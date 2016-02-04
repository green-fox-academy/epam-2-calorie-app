'use strict';



function getAll(psql, cb) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  psql.dbConnection(allUsers, cb);
}

module.exports = {
  getAll: getAll
};
