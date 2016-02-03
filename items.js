'use strict';

var psql = require('./database_connection.js')

function getAllConsumption(cb) {
  var allConsumption = 'SELECT cons_id, cons_name, cons_calories date FROM consumption;';
  psql.dbConnection(allConsumption, cb);
}

module.exports = {
  getAllConsumption: getAllConsumption
};
