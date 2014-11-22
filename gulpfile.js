var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('default', ['sass', 'webserver'], function() {
	gulp.watch(['css/sass/**/*.scss'], ['sass']);
});

gulp.task('webserver', function() {
	return gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('sass', function() {
	return gulp.src(['css/sass/*.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});