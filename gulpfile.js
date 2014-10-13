var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['sass'], function() {
	gulp.watch(['css/sass/**/*.scss'], ['sass']);
});

gulp.task('sass', function() {
	return gulp.src(['css/sass/style.scss'])
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});