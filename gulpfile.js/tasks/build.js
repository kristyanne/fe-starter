/**
 * `gulp build`
 */

var gulp = require('gulp');
var utils = require('../lib/utils');
var config = require('../config').production;

var buildTasks = [
    'css',
    'html',
    'browserify',
    'icons',
    'images'
];

var productionCopy = !utils.isDev() && config;

gulp.task('build', buildTasks, function() {
    if(productionCopy) {
        gulp.src(config.src).pipe(gulp.dest(config.dest));
    }
});
