'use strict';

var items = require('./items.js')

function getAllConsumption(connection) {
  return function(req, res) {
    items.getAll(connection, function (err, result) {
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
}

function deleteConsumption(connection) {
  return function() {
    items.deleteItem(connection, req.params.id, function (err, result) {
      if (err)
       {
         console.error(err);
         res.send('Error ' + err);
       }
      else
       {
         res.status(200);
       }
    });
  }
}

function putConsumption(connection) {
  return function() {
    items.add(connection, function (err, result) {
      if (err)
       {
         console.error(err);
         res.send('Error ' + err);
       }
      else
       {
         res.status(201).json(result);
       }
    });
  }
}

module.exports = {
  getAllCons: getAllConsumption,
  deleteCons: deleteConsumption,
  putCons: putConsumption
};
