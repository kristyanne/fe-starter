/**
 * jshint.js
 * ---------
 * `gulp jshint`
 *
 * lint (some of) the JS.
 */

var gulp = require('gulp');
var cached = require('gulp-cached');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = require('../config').jshint;

gulp.task('jshint', function() {
    gulp.src(config.src)
        .pipe(cached('jshint'))
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter(stylish));
});
