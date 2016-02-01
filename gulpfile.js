var gulp = require('gulp');
var gulp-util = require("gulp-utility");

gulp.task('default', function() {
  return gulp-util.log("gulp is ready")
});

var jshint = require('gulp-jshint');


gulp.task('lint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
