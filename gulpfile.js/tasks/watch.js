/**
 * `gulp watch`
 * Starts local dev server and watches files and folders for changes.
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var taskConfig = require('../config/tasks');

var watchTask = function() {
    var tasks = ['css', 'html'];

    tasks.forEach(function(task) {
        var path = taskConfig[task].watch;

        watch(path, function() {
            require('./' + task)()
        });
    });
}

gulp.task('watch', ['browsersync'], watchTask);
