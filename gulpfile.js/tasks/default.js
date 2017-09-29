/**
 * `gulp`
 * The default gulp task. Will be ran if no task is specified.
 *
 * Cleans the dist directory, runs all tasks defined in taskConfig
 * and starts the watch task.
 */
var gulp = require('gulp');
var sequence = require('gulp-sequence');
var buildTasks = require('../config/tasks').buildTasks;

var defaultTask = function(cb) {
    sequence('clean', buildTasks, 'watch', cb);
}

gulp.task('default', defaultTask);
