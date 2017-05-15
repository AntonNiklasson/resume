const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const webserver = require('gulp-webserver');
const fs = require('fs');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

gulp.task('default', ['images', 'templates', 'styles', 'webserver'], function() {
	gulp.watch(['./src/**/*.styl'], ['styles']);
	gulp.watch(['./src/templates/**/*'], ['templates']);
});

gulp.task('webserver', function() {
	return gulp.src('dist')
		.pipe(webserver({
			livereload: true
		}));
});

gulp.task('styles', function() {
	return gulp.src(['src/styles/*.styl'])
		.pipe(plumber())
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('templates', function() {
	return gulp.src('src/templates/index.hbs')
		.pipe(handlebars(
			require('./src/templates/data'),
			{ batch: ['./src/templates/partials'] }
		))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
	return gulp.src('./src/imgs/**/*')
		.pipe(gulp.dest('dist/imgs'))
});
