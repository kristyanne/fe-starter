/**
 * `gulp html`
 * Compile HTML from Handlebars templates.
 */
const gulp = require('gulp');
const hb = require('gulp-hb');
const hbHelpers = require('handlebars-helpers');
const hbLayouts = require('handlebars-layouts');
const fm = require('gulp-front-matter');
const bs = require('browser-sync');
const rename = require('gulp-rename');
const handleError = require('../lib/handleError');
const config = require('../config');
const task = require('../config/tasks').html;

const htmlTask = () => {
  const {
    partials,
    data,
    pages,
    dest
  } = task;

  const hbStream = hb({
    bustCache: true,
    debug: false,
    cwd: process.cwd()
  })
    .partials(partials)
    .helpers(hbHelpers)
    .helpers(hbLayouts)
    .helpers(task.helpers)

    // Template Data
    // 1. Pass the current environment (dev|prod) to the templates.
    .data(data)
    .data({
      env: config.env // [1]
    });

  return gulp.src(pages)
    .pipe(fm({
      property: 'data.frontMatter',
      remove: true
    }))
    .pipe(hbStream)
    .on('error', handleError)
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(dest))
    .pipe(bs.stream());
};

gulp.task('html', htmlTask);
module.exports = htmlTask;
