/**
 * `gulp eslint`
 *
 * Javascript linting.
 */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var bs = require('browser-sync');
var config = require('../config').eslint;

var lintTask = function() {
    return gulp.src(config.src)
        .pipe(eslint())
        .pipe(eslint.format())
};

gulp.task('eslint', function() {
    return lintTask();
});

module.exports = lintTask;
