/**
 * build.js
 * --------
 * `gulp build`
 *
 *  BUILD OVERLORD. Run this to compile all the things.
 */

var gulp  = require('gulp');

var buildTasks = [
    'images',
    'css',
    'html',
    'jshint',
    'browserify',
    'js:vendor'
];

gulp.task('build', buildTasks);
