/**
 * icons.js
 * ========
 * `gulp icons`
 *
 * Creates icon font files from SVG's in /src/svg/icons.
 */

require('es6-promise').Promise;

var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var hb = require('gulp-hb');
var imagemin = require('gulp-imagemin');

var runTimestamp = Math.round(Date.now() / 1000);

var config = require('../config').icons;

var fontName = 'icons';

gulp.task('icons', function() {
    return gulp.src(config.src)
        .pipe(imagemin({
            multipass: true
        }))
        .pipe(iconfont({
            formats: ['svg', 'ttf', 'eot', 'woff'],
            fontName: fontName,
            normalize: true,
            appendUnicode: false, // THIS IS BROKEN :(
            timestamp: runTimestamp
        }))
        .on('glyphs', function( glyphs ) {
            var options = {
                glyphs: glyphs.map(function( glyph ) {
                    return {
                        name: glyph.name,
                        codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
                    };
                }),
                fontName: fontName
            };

            return gulp.src(config.template.src)
                .pipe(hb({
                    data: options
                }))
                .pipe(gulp.dest(config.template.dest));
        })
        .pipe(gulp.dest(config.dest));
});
