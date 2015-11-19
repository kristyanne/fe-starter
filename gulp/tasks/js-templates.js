/**
 * js-templates.js
 * ---------------
 * `gulp js:templates`
 *
 * Precompile hbs templates into JS for use with Browserify.
 * https://github.com/lazd/gulp-handlebars/tree/master/examples/singleModule
 */

var gulp = require('gulp');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var hb = require('gulp-handlebars');

var config = require('../config').js.templates;

gulp.task('js:templates', function() {
    gulp.src(config.src)
        .pipe(hb({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            root: 'exports',
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(wrap('var Handlebars = require("Handlebars");\n <%= contents %>'))
        .pipe(gulp.dest(config.dest));
});
