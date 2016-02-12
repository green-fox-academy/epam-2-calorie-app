'use strict';

var connection = require('./database_connection');
var server = require('./server.js')
var config = require('./config.js');

var app = server(connection);

var port = parseInt(config.port);
app.listen(port, function () {
  console.log('Listening on port', port);
});
