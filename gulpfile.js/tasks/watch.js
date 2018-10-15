/**
 * `gulp watch`
 * Starts local dev server and watches files and folders for changes.
 */

const gulp = require('gulp');
const watch = require('gulp-watch');
const taskConfig = require('../config/tasks');

const watchTask = () => {
  const tasks = ['css', 'html'];

  tasks.forEach((task) => {
    const path = taskConfig[task].watch;

    watch(path, () => {
      require('./' + task)();
    });
  });
};

gulp.task('watch', ['browsersync'], watchTask);
