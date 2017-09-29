/**
 * `gulp build`
 * Compile all the FE assets.
 */

var gulp = require('gulp');
var sequence = require('gulp-sequence');
var config = require('../config');
var buildTasks = require('../config/tasks').buildTasks;

// Add webpack task to build tasks array.
buildTasks.push('webpack:build');

gulp.task('build', function(cb) {
    sequence('clean', buildTasks, cb);
});
