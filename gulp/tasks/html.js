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
var config = require('../config').html;

gulp.task('html', function() {
    var hbStream = hb({
        bustCache: true,
        debug: true,
        cwd: process.cwd()
    })

    // Partials/Layouts
    .partials(config.partials)

    // Helpers
    .helpers(require('handlebars-layouts'))
    .helpers(config.helpers)

    // Template Data
    .data(config.data);

    return gulp.src(config.pages)
        .pipe(hbStream)
        .on('error', handleError)
        .pipe(gulp.dest(config.dest))
        .pipe(size({ title: 'compiled html size:' }))
        .pipe(bs.reload({ stream: true }));
});
