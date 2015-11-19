/**
 * sass.js
 * -------
 * `gulp sass`
 *
 * Compile SASS, add sourcemaps, run autoprefixer on compiled CSS
 * and minify.
 */

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var nano         = require('gulp-cssnano');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').sass;
var handleError  = require('../lib/handleError');

var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

gulp.task('sass', ['scsslint'], function() {
    return gulp.src(config.src)
        .pipe(utils.isDev() ? sourcemaps.init() : noop())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .on('error', handleError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie >= 9']
        }))
        .pipe(!utils.isDev() ? nano() : noop())
        .pipe(utils.isDev() ? sourcemaps.write() : noop())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({ stream: true }));
});


