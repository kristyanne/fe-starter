/**
 * `gulp eslint`
 *
 * Javascript linting.
 */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var bs = require('browser-sync');
var config = require('../config').eslint;

gulp.task('eslint', function() {
	return gulp.src(config.src)
		.pipe(eslint())
		.pipe(eslint.format())
});
