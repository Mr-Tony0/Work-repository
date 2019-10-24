/*const gulp = require('gulp') // Подключаем Gulp
const concat = require('gulp-concat');
const nameFile = ['./app/css/test1.css' , './app/css/test2.css']

gulp.task('compile', async function(){
	return gulp.src(nameFile)
	.pipe(concat('test3.css'))
	.pipe(gulp.dest('./app/css'))
})
*/
//gulp.task('compile', compile)

var gulp = require('gulp');
const concat = require('gulp-concat');
const nameFile = ['./app/css/test1.css' , './app/css/test2.css']
gulp.task('mytask', async function() {
   return gulp.src(nameFile)
	.pipe(concat('test3.css'))
	.pipe(gulp.dest('./app/css'))
});
gulp.task('less', wrapPipe(function(success, error) {
  return gulp.src('less/*.less')
     .pipe(less().on('error', error))
     .pipe(gulp.dest('app/css'));
}));