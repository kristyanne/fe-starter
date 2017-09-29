/**
 * `gulp css`
 * Compile, prefix and minify stylesheets.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var bs = require('browser-sync');
var config = require('../config');
var task = require('../config/tasks').css;
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

var cssTask = function() {
    var processors = [
        autoprefixer()
    ];

    if(config.env === config.envs.prod) {
        processors.push(cssnano());
    }

    return gulp.src(task.src)
        .pipe(utils.isDev() ? sourcemaps.init() : noop())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
        .pipe(gulp.dest(task.dest))
        .pipe(bs.stream());
}


gulp.task('css', ['csslint'], cssTask);
module.exports = cssTask;
