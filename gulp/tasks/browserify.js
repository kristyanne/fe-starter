/**
 * browserify.js
 * -------------
 * `gulp js:bundle`
 *
 * Run browserify (or watchify if in DEV mode), uglify and then rename.
 *
 * Heavily "inspired" by:
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 */

var watchify = require('watchify');
var browserify = require('browserify');
var bs  = require('browser-sync');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');

var config = require('../config').js.browserify;
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

// Define custom browserify config options here.
//
// 1. sourcemaps, I think?
var customOpts = {
    entries: [config.src],
    debug: utils.isDev() // [1]
};

var bundleTask = function( devMode ) {
    var options;

    if(devMode) {
        options = assign({}, watchify.args, customOpts);
    } else {
        options = assign({}, customOpts);
    }

    var b = browserify( options );

    var bundle = function() {
        return b
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(utils.isDev() ? sourcemaps.init({ loadMaps: true }) : noop())
            .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
            .pipe(!utils.isDev() ? uglify() : noop())
            .pipe(gulp.dest(config.dest))
            .pipe(bs.reload({ stream: true }));
    };

    if(devMode) {
        b = watchify(b);
        b.on('update', bundle);
        b.on('log', gutil.log);
    }

    return bundle();
};

gulp.task('browserify', function() {
    return bundleTask();
});

module.exports = bundleTask;
