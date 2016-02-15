/**
 * watch.js
 * --------
 * `gulp watch`
 *
 * Watches files and folders for changes.
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['build', 'watchify', 'browsersync'], function() {
    // .scss
    gulp.watch(config.css.watchSrc, ['sass']);

    // .html
    gulp.watch(config.html.path + '/**/*.{html,hbs}', ['html']);
});
