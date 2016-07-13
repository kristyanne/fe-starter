/**
 * `gulp images`
 * Optimise and copy image files.
 *
 * 1. TODO: This seems high (default is 3). Maybe try out lower values and compare result.
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cached = require('gulp-cached');
var conf = require('../config').imagemin;

gulp.task('images', function() {
    return gulp.src(conf.src)
        .pipe(cached('images'))
        .pipe(imagemin({
            optimizationLevel: 7, // [1]
            progressive: true
        }))
        .pipe(gulp.dest(conf.dest));
});
