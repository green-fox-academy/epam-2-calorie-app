'use strict';

var items = require('./items.js')

function getAllConsumption(req, res) {
  items.getAllConsumption(function (err, result) {
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
