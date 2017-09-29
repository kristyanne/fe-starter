/**
 * `gulp html`
 * Compile HTML from Handlebars templates.
 */
var gulp = require('gulp');
var hb = require('gulp-hb');
var fm = require('gulp-front-matter');
var bs = require('browser-sync');
var rename = require('gulp-rename');
var handleError = require('../lib/handleError');
var config = require('../config');
var task = require('../config/tasks').html;

var htmlTask = function() {
    var hbStream = hb({
        bustCache: true,
        debug: false,
        cwd: process.cwd()
    })

    // Partials/Layouts
    .partials(task.partials)

    // Helpers
    .helpers(require('handlebars-helpers'))
    .helpers(require('handlebars-layouts'))
    .helpers(task.helpers)

    // Template Data
    // 1. Pass the current environment (dev|prod) to the templates.
    .data(task.data)
    .data({
        env: config.env // [1]
    })

    return gulp.src(task.pages)
        .pipe(fm({
            property: 'data.frontMatter',
            remove: true
        }))
        .pipe(hbStream)
        .on('error', handleError)
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(task.dest))
        .pipe(bs.stream())
}

gulp.task('html', htmlTask);
module.exports = htmlTask;
