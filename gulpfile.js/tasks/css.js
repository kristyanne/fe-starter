/**
 * `gulp css`
 * Compile, prefix and minify stylesheets.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const bs = require('browser-sync');
const gutil = require('gulp-util');
const config = require('../config');
const task = require('../config/tasks').css;
const utils = require('../lib/utils');

const {noop} = gutil;

const cssTask = () => {
  const processors = [
    autoprefixer()
  ];

  if(config.env === config.envs.prod) {
    processors.push(cssnano());
  }

  return gulp.src(task.src)
    .pipe(utils.isDev() ? sourcemaps.init() : noop())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
    .pipe(gulp.dest(task.dest))
    .pipe(bs.stream());
};


gulp.task('css', ['csslint'], cssTask);
module.exports = cssTask;
