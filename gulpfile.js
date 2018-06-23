var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Static Server + watching scss/html files
gulp.task('run', function(){

    browserSync.init({
         proxy: "http://test.ru"
    });

    gulp.watch('./sass/*.scss', ['sass']);
    
    gulp.watch(["js/*.js",'css/*.css','*.html','*/*.js']).on('change', browserSync.reload);
});