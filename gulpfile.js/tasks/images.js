/**
 * `gulp images`
 * Optimise and copy image files.
 */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const tasks = require('../config/tasks');

gulp.task('images', () => {
  const {images} = tasks;
  const {src, dest} = images;

  return gulp.src(src)
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest(dest));
});
