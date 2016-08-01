/**
 * `gulp serve`
 * Runs a local static web server (http://www.browsersync.io).
 */

var gulp = require('gulp');
var bs = require('browser-sync');
var config = require('../config').browserSync;

gulp.task('serve', function() {
    return bs({
        server: {
            baseDir: config.baseDir,
            directory: true
        },
        ghostMode: false,
        notify: true
    });
});
