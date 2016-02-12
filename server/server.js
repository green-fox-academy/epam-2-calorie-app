'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var usersEndpoint = require('./users_endpoint.js');
var consumptionsEndpoint = require('./consumptions_endpoint.js');


function setup(connection) {
  var app = express();
  app.use(logRequest);
  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/db/users', usersEndpoint.getAllUsers(connection));
  app.get('/db/consumption', consumptionsEndpoint.getAllCons(connection));
  app.delete('/db/consumption/:id', consumptionsEndpoint.deleteCons(connection));
  app.post('/db/consumption', consumptionsEndpoint.putCons(connection));

  function logRequest(req, res, next) {
    var parts = [
      new Date(),
      req.method,
      req.originalUrl,
    ];
    console.log(parts);
    next();
  }
  return app;
}

module.exports = setup;
