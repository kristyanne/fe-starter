/**
 * `gulp fonts`
 * Copy font assets found in `./src/fonts`.
 */
const gulp = require('gulp');
const task = require('../config/tasks').fonts;

gulp.task('fonts', () => {
  return gulp.src(task.src)
    .pipe(gulp.dest(task.dest));
});
