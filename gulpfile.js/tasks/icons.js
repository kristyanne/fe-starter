/**
 * `gulp icons`
 *
 * Create an SVG spritesheet for iconography.
 */

var gulp = require('gulp');
var sprite = require('gulp-svg-sprite');

var error = require('../lib/handleError');
var config = require('../config').icons;

gulp.task('icons', function() {
    gulp.src(config.src)
        .pipe(sprite({
            mode: {
                symbol: {
                    render: {
                        css: false,
                        scss: false
                    },
                    dest: '',
                    sprite: 'icons.svg',
                    example: {
                        dest: '../html/docs/icons.html'
                    }
                }
            },
            shape: {
                id: {
                    generator: 'icon-%s'
                },
                meta: config.yml
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false
            }
        }))
        .on('error', error)
        .pipe(gulp.dest(config.dest))
});
