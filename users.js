'use strict';

var psql = require('./database_connection.js')


function getAllUsers(req, res) {
  var allUsers = 'SELECT user_id, user_name FROM users;';
  psql.dbConnection(allUsers, function (err, result) {
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

module.exports = {
  getAllUsers: getAllUsers
};
