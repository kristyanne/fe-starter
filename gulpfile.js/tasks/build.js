/**
 * `gulp build`
 * Compile all the FE assets.
 */

const gulp = require('gulp');
const sequence = require('gulp-sequence');
const build = require('../config/tasks');

const {buildTasks} = build;

// Add webpack task to build tasks array.
buildTasks.push('webpack:build');

gulp.task('build', (cb) => {
  sequence('clean', buildTasks, cb);
});
