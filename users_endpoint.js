'use strict';

var users = require('./users.js')
var psql = require('./database_connection.js');

function getAllUsers( req, res) {
  users.getAll(psql,function (err, result) {
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
