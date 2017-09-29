var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('../../webpack.config.js');

// Params to pass to webpack.config.js
var params = {};

if(config.env === config.envs.prod) {
    params.production = true;
}


/**
 * Build.
 * @param  {[type]} cb
 * @return
 */
gulp.task('webpack:build', function(cb) {
    var wp = webpackConfig(params);

    webpack(wp, function(error, stats) {
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
gulp.task('webpack-dev-server', function(cb) {
    var wp = webpackConfig();
});
