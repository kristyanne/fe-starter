/**
 * `gulp build`
 */

var gulp  = require('gulp');

var buildTasks = [
    'css',
    'html',
    'jshint',
    'browserify',
    //'js:vendor',
    'images'
];

gulp.task('build', buildTasks);
