/**
 * `gulp build`
 */

var gulp  = require('gulp');

var buildTasks = [
    'css',
    'html',
    'browserify',
    'images'
];

gulp.task('build', buildTasks);
