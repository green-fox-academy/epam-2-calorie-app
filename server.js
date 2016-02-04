'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var functions = require('./functions.js');
var usersEndpoint = require('./users_endpoint.js');
var itemsEndpoint = require('./items_endpoint.js');

var app = express();

var port = parseInt(process.env.PORT || '3000');
app.listen(port, function () {
  console.log('Listening on port', port);
});

app.use(logRequest);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/test', functions.getTest);
app.get('/test2', functions.getTest2);
app.get('/db/users', usersEndpoint.getAllUsers);
app.get('/db/consumption', itemsEndpoint.getAllCons);
//app.post('/db/consumption', itemsEndpoint.putCons);

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  next();
}
