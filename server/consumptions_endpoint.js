'use strict';

var items = require('./consumptions.js')

function getAllConsumption(connection) {
  return function(req, res) {
    items.getAll(connection, function (err, result) {
      if (err)
      {
         console.error(err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result.rows);
      }
    });
  }
}

function deleteConsumption(connection) {
  return function(req, res) {
    items.deleteItem(connection, req.params.id, function (err, result) {
      if (err)
      {
         console.error(err);
         res.status(500).json({error: err});
      }
      else
      {
         res.status(200).json(result);
      }
    });
  }
}

function putConsumption(connection) {
  return function(req, res) {
    items.add(connection, req, function (err, result) {
      if (err)
       {
         console.error(err);
         res.status(500).json({error: err});
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
