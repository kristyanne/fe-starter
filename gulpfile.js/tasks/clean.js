/**
 * `gulp clean`
 * Cleans out the dist directory.
 */
const gulp = require('gulp');
const del = require('del');
const config = require('../config');

const clean = () => {
  return del(config.paths.dist, { force: true });
};

gulp.task('clean', clean);
module.exports = clean;
