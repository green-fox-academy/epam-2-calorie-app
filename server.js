'use strict';

var express = require('express');
var app = express();


function serverStarting() {
  var port = parseInt(process.env.PORT || '3000');
  app.listen(port, function () {
    console.log('Listening on port', port);
  });
}





module.exports = {
  start: serverStarting
}
