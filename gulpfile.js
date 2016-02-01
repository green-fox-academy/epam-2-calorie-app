'use strict';

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

var gulp = require('gulp'),
var watch = require('gulp-watch');

gulp.task('stream', function () {
    return gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function (cb) {
    watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(watch('css/**/*.css'))
            .on('end', cb);
    });
});
