var gulp = require('gulp');
var coffee = require('gulp-coffee');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('js', function () {
	return gulp.src('./translations.coffee')
		.pipe(coffee())
		.pipe(gulp.dest('./'));
});

gulp.task('compile-html', ['js'], function() {
	var translations = require('./translations.js')();
	return gulp.src('./template.html')
		.pipe(handlebars({ translations: translations}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'));
});