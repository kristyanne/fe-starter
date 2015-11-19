/**
 * imagemin.js
 * -----------
 * `gulp images`
 *
 * Minify and copy images. That is all.
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cached = require('gulp-cached');

var config = require('../config').imagemin;

gulp.task('images', function() {
    return gulp.src(config.src)
        .pipe(cached('imagemin'))
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest(config.dest));
});
