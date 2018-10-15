/**
 * `gulp browsersync`
 * Run local development server (Including middleware and HMR for webpack).
 */

const config = require('../config');

if(config.env === config.envs.prod) {
  return;
}

var gulp = require('gulp');
var bs = require('browser-sync');
var task = require('../config/tasks').browserSync;
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config.js');

var bsTask = function() {
  var wpConfig = webpackConfig({local: true});
  var compiler = webpack(wpConfig);

  var server = {
    server: {
      baseDir: task.baseDir
    }
  };

  server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      watchOptions: {},
      publicPath: wpConfig.output.publicPath
    }),
    require('webpack-hot-middleware')(compiler)
  ];

  bs.init(server);
}

gulp.task('browsersync', bsTask);

module.exports = bsTask;
