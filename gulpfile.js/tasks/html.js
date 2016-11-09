/**
 * `gulp html`
 *
 * Compile HTML from Handlebars templates.
 */

var gulp = require('gulp');
var hb = require('gulp-hb');
var bs = require('browser-sync');
var handleError  = require('../lib/handleError');
var size = require('gulp-size');
var taskConfig = require('../config/tasks').html;

gulp.task('html', function() {
    var hbStream = hb({
        bustCache: true,
        debug: false,
        cwd: process.cwd()
    })

    // Partials/Layouts
    .partials(taskConfig.partials)

    // Helpers
    .helpers(require('handlebars-layouts'))
    .helpers(taskConfig.helpers)

    // Template Data
    .data(taskConfig.data);

    return gulp.src(taskConfig.pages)
        .pipe(hbStream)
        .on('error', handleError)
        .pipe(gulp.dest(taskConfig.dest))
        .pipe(size({ title: 'compiled html size:' }))
        .pipe(bs.reload({ stream: true }));
});