const gulp = require('gulp');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

function defaultTask(cb) {
  return gulp.src('./assets/css/tailwind.css')
    .pipe(postcss())
    .pipe(csso())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./assets/css'));
  cb();
}

exports.default = defaultTask
