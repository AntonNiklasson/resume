var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('default', ['sass'], function() {
	livereload.listen();
	gulp.watch(['css/sass/**/*.scss'], ['sass']);
	gulp.watch(['*.html'], ['livereload']);
});

gulp.task('livereload', function() {
	return gulp.src(['*.html', 'css/**/*.css'])
		.pipe(livereload());
});

gulp.task('sass', function() {
	return gulp.src(['css/sass/*.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});