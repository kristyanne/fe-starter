/**
 * `gulp build`
 */

var gulp = require('gulp');
var utils = require('../lib/utils');
var config = require('../config');
var taskConfig = require('../config/tasks').production;

var buildTasks = [
    'css',
    'html',
    'browserify',
    'icons',
    'images',
    'fonts'
];

var productionCopy = (config.env !== config.envs.dev) && config;

gulp.task('build', buildTasks, function() {
    if(productionCopy) {
        gulp.src(taskConfig.src).pipe(gulp.dest(taskConfig.dest));
    }
});
