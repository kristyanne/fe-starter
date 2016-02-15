/**
 * sass.js
 * -------
 * `gulp sass`
 *
 * Compile SASS, add sourcemaps, run autoprefixer on compiled CSS
 * and minify.
 */

// Import Plugins
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Import Utils & Configs
var config = require('../config').css;
var handleError = require('../lib/handleError');
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

// Task Declaration
gulp.task('css', ['scsslint'], function() {
    var processors = [
        autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie >= 9']})
    ];

    if(!utils.isDev()) {
        processors.push(cssnano());
    }

    return gulp.src(config.src)
        .pipe(utils.isDev() ? sourcemaps.init() : noop())
        .pipe(sass({
            includePaths: [
                require('node-bourbon').includePaths,
                './node_modules/normalize.css'
            ]
        }))
        .on('error', handleError)
        .pipe(postcss(processors))
        .pipe(utils.isDev() ? sourcemaps.write() : noop())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({ stream: true }));
});


