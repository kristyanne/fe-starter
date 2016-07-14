/**
 * `gulp sass`
 *
 * Compile, prefix and minify stylesheets.
 */

// Import Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var bs = require('browser-sync');

// Import Utils & Configs
var config = require('../config').css;
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

// Task Declaration
gulp.task('css', ['csslint'], function() {
    var processors = [
        autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie >= 10']})
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
        }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
        .pipe(gulp.dest(config.dest))
        .pipe(bs.reload({ stream: true }));
});


