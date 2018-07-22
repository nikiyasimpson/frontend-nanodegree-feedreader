var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browerSync = require('brower-sync').create();
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine-phantom');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('default',['copy-html','copy-images','styles','lint']{
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['lint']);
    gulp.watch('/index.html',['copy-html']);
//write code needed for browswer-sync to listen to changes in index.html the copied one
    gulp.watch('./build/index.html').on('change',browserSync.reload);

    browserSync.init({
          server: './dist'
     });
});

gulp.task('copy-html', function() {
    gulp.src('./index.html')
          .pipe(gulp.dest('./dist'));

gulp.task('copy-images', function() {
    gulp.src('img/*')
          .pipe(gulp.dest('dist/img'));

gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
          .pipe(sass({
               outputStyle: 'compressed'
          }).on('error', sass.logError))
          .pipe(autoprefixer({
               browerser: ['last 2 versions']
          }))
          .pipe(gulp.dest('dist/css'))
          .pipe(browserSync.stream());
});
   
gulp.taks('lint', function() {
    return gulp.src(['js/**/*.js'])

