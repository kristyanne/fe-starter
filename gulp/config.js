/**
 * config.js
 * ---------
 * configuration settings for the project gulp tasks.
 */

// Define base paths
var paths = {
    src:  './src',
    dist: './dist'
};

// Task level configration
var config = {
    paths: paths,

    browserSync: {
        baseDir: [ paths.dist + '/html', paths.dist ]
    },

    css: {
        watchSrc:  paths.src + '/scss/**/*.scss',
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/**/_*.scss'
        ],
        dest: paths.dist + '/css'
    },

    fonts: {
        src: paths.src + '/fonts/**/*.{eot,svg,ttf,woff}',
        dest: paths.dist + '/fonts'
    },

    html: {
        path: paths.src + '/html',
        pages: paths.src + '/html/pages/**/*.html',
        helpers: 'gulp/helpers/*.js',
        partials: paths.src + '/html/{layouts,partials}/**/*.{html,hbs}',
        data: paths.src + '/html/data/**/*.{js,json}',
        dest: paths.dist + '/html'
    },

    icons: {
        src: paths.src + '/svg/icons/**/*.svg',
        dest: paths.dist + '/fonts/icons',
        template: {
            src: './gulp/templates/_icons.scss',
            dest: paths.src + '/scss/config'
        }
    },

    imagemin: {
        src: paths.src + '/img/**/*.{png,jpg,jpeg,gif,ico}',
        dest: paths.dist + '/img'
    },

    js: {
        browserify: {
            src: paths.src + '/js/main.js',
            dest: paths.dist + '/js'
        },
        vendor: {
            src: paths.src + '/js/vendor/**/*.js',
            dest: paths.dist + '/js'
        },
        templates: {
            src: paths.src + '/js/tpl/**/*.hbs',
            dest: paths.src + '/js/lib'
        }
    },

    jshint: {
        src: [
            paths.src + '/js/**/*.js',
            '!' + paths.src + '/js/vendor/**',
            '!' + paths.src + '/js/plugins/**',
            '!' + paths.src + '/js/lib/templates.js'
        ]
    },

    scssLint: {
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/lib/**/*',
            '!' + paths.src + '/scss/plugins/**/*'
        ]
    }
};

module.exports = config;
