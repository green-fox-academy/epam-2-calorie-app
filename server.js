'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var usersEndpoint = require('./users_endpoint.js');
var itemsEndpoint = require('./items_endpoint.js');


function Setup(connection) {
  var app = express();
  app.use(logRequest);
  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/db/users', usersEndpoint.getAllUsers(connection));
  app.get('/db/consumption', itemsEndpoint.getAllCons(connection));
  app.delete('/db/consumption/:id', itemsEndpoint.deleteCons(connection));
  app.post('/db/consumption', itemsEndpoint.putCons(connection));

  function logRequest(req, res, next) {
    var parts = [
      new Date(),
      req.method,
      req.originalUrl,
    ];
    next();
  }
  return app;
}

module.exports = Setup;
