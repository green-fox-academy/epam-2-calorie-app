'use strict';

var jasmine = require('gulp-jasmine');
var gulp = require('gulp');

gulp.task('test', function () {
  return gulp.src('../spec/*[sS]pec.js')
    .pipe(jasmine());
});
