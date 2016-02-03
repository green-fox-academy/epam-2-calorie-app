'use strict';

var psql = require('./database_connection.js')

function getAllConsumption(req, res) {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories date FROM consumption;';
  psql.dbConnection(allConsumption, function (err, result) {
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
  getAllCons: getAllConsumption
};
