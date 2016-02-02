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

app.get('/test', getTest);

function getTest(req, res) {
  res.write('Hello World');
  res.end();
}

app.get('/test2', getTest2);

function getTest2(req, res) {
  var url = req.originalUrl;
  res.write(createQuery('get', url));
  res.end();
}

function createQuery(requestType, url) {
  if (requestType === 'get') {
    return 'SELECT * FROM ' + url.substring(1, url.length);
  }
}

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];

  next();
}
