/**
 * `gulp build`
 */

var gulp = require('gulp');
var utils = require('../lib/utils');

var buildTasks = [
    'css',
    'html',
    'browserify',
    'icons',
    'images'
];

gulp.task('build', buildTasks);
