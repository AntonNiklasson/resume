var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var html2pdf = require('gulp-html2pdf');

gulp.task('default', ['sass', 'pdf'], function() {
	gulp.watch(['css/sass/**/*.scss'], ['sass', 'pdf']);
	gulp.watch(['index.html'], ['pdf']);
});

gulp.task('sass', function() {
	return gulp.src(['css/sass/style.scss'])
		.pipe(sass())
		.pipe(gulp.dest('./css'));
})

gulp.task('pdf', function() {
	return gulp.src(['index.html'])
		.pipe(html2pdf())
		.pipe(gulp.dest('./'));
});