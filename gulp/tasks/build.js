/**
 * `gulp build`
 */

var gulp  = require('gulp');

var buildTasks = [
    'css',
    'html',
    'browserify',
    'icons',
    'images'
];

gulp.task('build', buildTasks);
