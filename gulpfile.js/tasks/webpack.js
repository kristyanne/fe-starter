const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('../../webpack.config.js');

// Params to pass to webpack.config.js
const params = {};

if(config.env === config.envs.prod) {
  params.production = true;
}

/**
 * Build.
 * @param  {[type]} cb
 * @return
 */
gulp.task('webpack:build', (cb) => {
  const wp = webpackConfig(params);

  webpack(wp, (error, stats) => {
    if(error) {
      throw new gutil.PluginError('webpack-build', error);
    }

    gutil.log('[webpack-build]', stats.toString({
      colors: true
    }));

    cb();
  });
});


/**
 * Dev Server.
 * @param  {[type]} cb
 * @return
 */
gulp.task('webpack-dev-server', (cb) => {
  const wp = webpackConfig();
});
