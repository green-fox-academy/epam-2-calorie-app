'use strict';

var connection = require('./database_connection');
var server = require('./server.js')

var app = server;

app.setup(connection);
app.start();
