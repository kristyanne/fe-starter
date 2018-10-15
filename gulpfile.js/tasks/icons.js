/**
 * `gulp icons`
 * Create an SVG spritesheet for iconography.
 */
const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
const error = require('../lib/handleError');
const taskConfig = require('../config/tasks');

gulp.task('icons', () => {
  const {icons} = taskConfig;
  const {src, yml, dest} = icons;

  gulp.src(src)
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
        meta: yml
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .on('error', error)
    .pipe(gulp.dest(dest));
});
