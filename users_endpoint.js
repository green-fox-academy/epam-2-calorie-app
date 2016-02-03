'use strict';

var users = require('./users.js')


function getAllUsers(req, res) {
  users.getAll(function (err, result) {
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
