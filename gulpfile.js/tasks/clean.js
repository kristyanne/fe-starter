/**
 * `gulp clean`
 * Cleans out the dist directory.
 */
var gulp = require('gulp');
var del  = require('del');
var path = require('path');
var config = require('../config');

const clean = function(cb) {
    return del(config.paths.dist, { force: true });
}

gulp.task('clean', clean);
module.exports = clean;
