'use strict';

var users = require('./users.js');

function getAllUsers(connection) {
  return function(req, res) {
    users.getAll(connection, function (err, result) {
      if (err)
      {
         console.error(err);
         res.status(500).json({error: err});
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
