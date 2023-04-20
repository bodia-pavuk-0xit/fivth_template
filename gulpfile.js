'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('styles', () => {
  return gulp.src([
    './scss/global.scss',
    './scss/*.scss',
  ])
    .pipe(sass().on('error', sass.logError))
    .on('error', sass.logError)
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(['scss/*', 'Components/**/*'], { ignoreInitial: false }, gulp.series(['styles']));
});

gulp.task('default', gulp.series(['styles', 'watch']));
