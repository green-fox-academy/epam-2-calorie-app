'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(logRequest);
app.use(express.static('public'));
app.use(bodyParser.json());

var port = parseInt(process.env.PORT || '3000');
app.listen(port, function () {
  console.log('Listening on ', port);
});

app.get('/', function (req, res) {
    res = 'Hello World';
  });

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];

  next();
}
