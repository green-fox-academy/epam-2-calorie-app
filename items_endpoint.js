'use strict';

var items = require('./items.js')
var psql = require('./database_connection.js');

function getAllConsumption(req, res) {
  items.getAll(psql, function (err, result) {
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

function deleteConsumption(req, res) {
  items.deleteItem(psql, req.params.id, function (err, result) {
    if (err)
     {
       console.error(err);
       res.send('Error ' + err);
     }
    else
     {
       res.status(200).json(result);
     }
  });
}

// function putConsumption(req, res) {
//   items.add(req, function (err, result) {
//     if (err)
//      {
//        console.error(err);
//        res.send('Error ' + err);
//      }
//     else
//      {
//        res.json(result.rows);
//      }
//   });
// }

module.exports = {
  getAllCons: getAllConsumption,
  deleteCons: deleteConsumption
  // putCons: putConsumption
};
