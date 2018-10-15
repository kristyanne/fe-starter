/**
 * `gulp svg`
 */
const gulp = require('gulp');
const task = require('../config/tasks').svg;

gulp.task('svg', () => {
  return gulp.src(task.src)
    .pipe(gulp.dest(task.dest));
});
