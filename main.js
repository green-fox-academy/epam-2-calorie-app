'use strict';

var server = require('./server.js');
var functions = require('./functions.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

server.start();

app.use(logRequest);
app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/test', functions.getTest);
app.get('/test2', functions.getTest2);

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  next();
}
