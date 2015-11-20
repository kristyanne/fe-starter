/**
 * html.js
 * -------
 * `gulp html`
 *
 * Compile HTML.
 * Uses the handlebars templating engine.
 */

var gulp = require('gulp');
var hb = require('gulp-hb');
var bs = require('browser-sync');
var handleError  = require('../lib/handleError');

var config = require('../config').html;

gulp.task('html', function() {
    return gulp.src(config.pages)
        .pipe(hb({
            bustCache: true,
            helpers: config.helpers,
            partials: config.partials,
            data: config.data,
            debug: true
        }))
        .on('error', handleError)
        .pipe(gulp.dest(config.dest))
        .pipe(bs.reload({ stream: true }));
});
