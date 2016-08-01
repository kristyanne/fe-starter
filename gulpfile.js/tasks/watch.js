/**
 * `gulp watch`
 * Starts local dev server and watches files and folders for changes.
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['build', 'watchify', 'serve'], function() {
    // .scss
    gulp.watch(config.css.watchSrc, ['css']);

    // .html
    gulp.watch(config.html.path + '/**/*.{html,hbs}', ['html']);
});
