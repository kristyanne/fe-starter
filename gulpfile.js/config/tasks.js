/**
 * Task level configuration values.
 */
var config = require('.');
var paths = config.paths;

module.exports = (function() {
 return {
    /**
     * Browsersync.
     * https://browsersync.io
     */
    browserSync: {
        baseDir: paths.dist
    },

    /**
     * CSS.
     */
    css: {
        watch:  paths.src + '/scss/**/*.scss',
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/**/_*.scss'
        ],
        dest: paths.assets + '/css'
    },

    /**
     * CSS Linting.
     * http://stylelint.io/
     */
    csslint: {
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/lib/**/*',
            '!' + paths.src + '/scss/plugins/**/*'
        ]
    },

    /**
     * Font Assets.
     */
    fonts: {
        src: paths.src + '/fonts/**/*',
        dest: paths.assets + '/fonts'
    },

    /**
     * HTML.
     * https://github.com/shannonmoeller/gulp-hb
     */
    html: {
        path: paths.src + '/html',
        pages: paths.src + '/html/pages/**/*.{html,hbs}',
        partials: paths.src + '/html/templates/**/*.{html,hbs}',
        helpers: paths.src + '/html/helpers/**/*.js',
        data: paths.src + '/html/data/**/*.{js,json}',
        dest: paths.dist,
        watch: paths.src + '/html/**/*.{html,hbs}'
    },

    /**
     * SVG Icon Sprite.
     */
    icons: {
        src: paths.src + '/svg/icons/**/*.svg',
        dest: paths.assets + '/svg',
        yml: './icons.yml'
    },

    /**
     * Compress Images.
     * https://github.com/sindresorhus/gulp-imagemin
     */
    images: {
        src: paths.src + '/img/**/*.{png,jpg,jpeg,gif,ico}',
        dest: paths.assets + '/img'
    },

    /**
     * Static/Root Assets.
     */
    static: {
        src: paths.src + '/static/**',
        dest: paths.assets
    },

    /**
     * SVG.
     */
    svg: {
        src: paths.src + '/svg/**/*.svg',
        dest: paths.assets + '/svg'
    },

    /**
     * Array of tasks to be ran for a build.
     */
    buildTasks: [
        'css',
        'html',
        'fonts',
        'icons',
        'images',
        'svg',
        'static'
    ]
 }
})();
