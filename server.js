'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var usersEndpoint = require('./users_endpoint.js');
var itemsEndpoint = require('./items_endpoint.js');

var app = express();

function Setup(connection) {
  app.use(logRequest);
  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/db/users', usersEndpoint.getAllUsers(connection));
  app.get('/db/consumption', itemsEndpoint.getAllCons(connection));
  app.delete('/db/consumption/:id', itemsEndpoint.deleteCons);
  app.post('/db/consumption', itemsEndpoint.putCons);

  this.start = function() {
    var port = parseInt(process.env.PORT || '3000');
    app.listen(port, function () {
      console.log('Listening on port', port);
    });
  }

  function logRequest(req, res, next) {
    var parts = [
      new Date(),
      req.method,
      req.originalUrl,
    ];
    next();
  }
}

module.exports = Setup;
