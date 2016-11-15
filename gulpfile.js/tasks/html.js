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
var config = require('../config');
var taskConfig = require('../config/tasks').html;

gulp.task('html', function() {
    console.log(config);

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
    //
    // 1. Pass the current evironment (dev, qa etc) to the templates.
    .data(taskConfig.data)
    .data({
        env: config.env // [1]
    })

    return gulp.src(taskConfig.pages)
        .pipe(hbStream)
        .on('error', handleError)
        .pipe(gulp.dest(taskConfig.dest))
        .pipe(size({ title: 'compiled html size:' }))
        .pipe(bs.reload({ stream: true }));
});
