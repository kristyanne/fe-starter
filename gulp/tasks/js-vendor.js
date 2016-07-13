/**
 * `gulp js:vendor`
 *
 * Copy pre-minified JS libs.
 */

var gulp = require('gulp');
var cached = require('gulp-cached');

var config = require('../config').js.vendor;

gulp.task('js:vendor', function() {
    return gulp.src(config.src)
        .pipe(cached('js:vendor'))
        .pipe(gulp.dest(config.dest));
});
