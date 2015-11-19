/**
 * browsersync.js
 * --------------
 * `gulp browsersync`
 *
 * Runs a local static web server (http://www.browsersync.io).
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').browserSync;

gulp.task('browsersync', function() {
    return browserSync({
        server: {
            baseDir:   config.baseDir,
            directory: true
        },
        ghostMode: false,
        notify:    true
    });
});
