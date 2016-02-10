'use strict';

var users = require('./users.js');

function getAllUsers(connection) {
  return function(req, res) {
    users.getAll(connection, function (err, result) {
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
  };
}

module.exports = {
  getAllUsers: getAllUsers
};
