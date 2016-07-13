/**
 * `gulp build`
 */

var gulp  = require('gulp');

var buildTasks = [
    'css',
    'html',
    'eslint',
    'browserify',
    'images'
];

gulp.task('build', buildTasks);
