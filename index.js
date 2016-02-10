'use strict';

var connection = require('./database_connection');
var Server = require('./server.js')

var app = new Server(connection);

app.start();
