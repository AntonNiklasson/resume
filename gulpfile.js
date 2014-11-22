var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var browsersync = require('browser-sync');

gulp.task('default', ['sass', 'browsersync'], function() {
	gulp.watch(['css/sass/**/*.scss'], ['sass']);
});

gulp.task('sass', function() {
	return gulp.src(['css/sass/style.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});

gulp.task('browsersync', function() {
    browsersync({
        server: {
            baseDir: './'
        }
    });
});