/**
 * build.js
 * --------
 * `gulp build`
 *
 *  BUILD OVERLORD. Run this to compile all the things.
 */

var gulp  = require('gulp');
//var noop  = require('gulp-util').noop;
//var utils = require('../lib/utils');

//var config = require('../config').production;

var buildTasks = [
    'images',
    'icons',
    'sass',
    'html',
    'jshint',
    'js:templates',
    'browserify',
    'js:vendor'
];

gulp.task('build', buildTasks);

// gulp.task('build', buildTasks, function() {
//     gulp.src(config.src)
//         .pipe(!utils.isDev() ? gulp.dest(config.dest) : noop());
// });
