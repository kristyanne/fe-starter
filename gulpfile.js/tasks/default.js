/**
 * `gulp`
 * The default gulp task. Will be ran if no task is specified.
 *
 * Cleans the dist directory, runs all tasks defined in taskConfig
 * and starts the watch task.
 */
const gulp = require('gulp');
const sequence = require('gulp-sequence');
const tasks = require('../config/tasks');

const {buildTasks} = tasks;

const defaultTask = (cb) => {
  sequence('clean', buildTasks, 'watch', cb);
};

gulp.task('default', defaultTask);
