/**
 * `gulp static`
 * Copy assets in ./src/static to the root of .dist/
 */

const gulp = require('gulp');
const task = require('../config/tasks').static;

gulp.task('static', () => {
  return gulp.src(task.src)
    .pipe(gulp.dest(task.dest));
});
