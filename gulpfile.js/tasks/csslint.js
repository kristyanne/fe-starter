/**
 * `gulp csslint`
 * CSS linting task.
 */
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const task = require('../config/tasks').csslint;

gulp.task('csslint', () => {
  return gulp.src(task.src)
    .pipe(stylelint({
      reporters: [{
        failAfterError: false,
        formatter: 'string',
        console: true
      }],
      syntax: 'scss'
    }));
});
