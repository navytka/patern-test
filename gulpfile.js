'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('minify-css', function() {
    return gulp.src([
        './assets/libs/bootstrap.css',
        './assets/libs/bootstrap-theme.css',
        './assets/libs/slick.css',
        './assets/libs/slick-theme.css',
        './assets/css/style.css',
        './assets/css/media.css'
    ])
        .pipe(concatCss("./dist/assets/bundle.css"))
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('sass', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('copy-index', function() {
    gulp.src('./index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('build', [ 'sass', 'minify-css', 'copy-index' ], function() {
});

gulp.task('sass:watch', [ 'sass' ], function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
