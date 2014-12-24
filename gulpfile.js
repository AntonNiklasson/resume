var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var fs = require('fs');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', ['template', 'sass', 'webserver'], function() {
	gulp.watch(['./css/sass/**/*.scss'], ['sass']);
	gulp.watch(['./index.hbs', './data.json'], ['template']);
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

gulp.task('template', function() {
	var file = fs.readFileSync('./data.json', 'utf8');
	var data = JSON.parse(file);

	return gulp.src('index.hbs')
		.pipe(handlebars(data))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'));
});