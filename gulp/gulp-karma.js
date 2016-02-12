'use strict';

var Server = require('karma').Server;
var gulp = require('gulp');

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
});
