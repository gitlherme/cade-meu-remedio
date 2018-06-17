const gulp = require('gulp');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const files = "./src/*.js";

gulp.task('lint', function() {

gulp.src(files)
.pipe(jshint())
.pipe(jshint.reporter('default'));
});

gulp.task('dist', function() {

gulp.src(files)
.pipe(concat('./dist'))
.pipe(rename('dist.min.js'))
.pipe(uglify())
.pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {

gulp.run('lint', 'dist');
gulp.watch(files, function(evt) {
gulp.run('lint', 'dist');
});
});