var gulp = require('gulp');
var gulpUtil = require("gulp-util");

gulp.task('default', function() {
  return gulpUtil.log("gulp is ready");
});

var jshint = require('gulp-jshint');


gulp.task('lint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
