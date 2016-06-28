/**
 * build.js
 * --------
 * `gulp build`
 *
 *  BUILD OVERLORD. Run this to compile all the things.
 */

var gulp  = require('gulp');

var buildTasks = [
    'css',
    'html',
    'jshint',
    'browserify',
    'js:vendor',
    'images'
];

gulp.task('build', buildTasks);
