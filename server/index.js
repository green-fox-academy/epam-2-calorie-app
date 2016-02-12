'use strict';

var connection = require('./database_connection');
var server = require('./server.js')
var port = require('./config.js').port;

var app = server(connection);

app.listen(port, function () {
  console.log('Listening on port', port);
});
