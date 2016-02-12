'use strict';

require('./gulp/gulp-karma.js');

var gulp = require('gulp');
var gulpUtil = require('gulp-util');

gulp.task('default', function() {
  return gulpUtil.log('gulp is ready');
});

var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('build', function () { console.log('Working!'); });

gulp.task('watch', function () {
    watch('**/*.js', batch(function (events, done) {
        gulp.start('test', done);
    }));
});

var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src('./spec/*[sS]pec.js')
    .pipe(jasmine());
});
