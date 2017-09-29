/**
 * `gulp icons`
 * Create an SVG spritesheet for iconography.
 */
var gulp = require('gulp');
var sprite = require('gulp-svg-sprite');
var error = require('../lib/handleError');
var task = require('../config/tasks').icons;

gulp.task('icons', function() {
    gulp.src(task.src)
        .pipe(sprite({
            mode: {
                symbol: {
                    render: {
                        css: false,
                        scss: false
                    },
                    dest: '',
                    sprite: 'icons.svg'
                }
            },
            shape: {
                id: {
                    generator: 'icon-%s'
                },
                meta: task.yml
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false
            }
        }))
        .on('error', error)
        .pipe(gulp.dest(task.dest))
});
