/**
 * Configuration settings for the project gulp tasks.
 */

// Define base paths
var paths = {
    src:  './src',
    dist: './dist'
};

// Task level configration
var config = {
    paths: paths,

    browserify: {
        src: paths.src + '/js',
        dest: paths.dist + '/js',
        entry: 'main.js',
        output: 'main.bundle.js'
    },

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

    csslint: {
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/lib/**/*',
            '!' + paths.src + '/scss/plugins/**/*'
        ]
    },

    eslint: {
        src: [
            paths.src + '/js/**/*.js',
            '!' + paths.src + '/js/vendor/**',
            '!' + paths.src + '/js/lib/templates.js'
        ]
    },

    fonts: {
        src: paths.src + '/fonts/**/*.{eot,svg,ttf,woff}',
        dest: paths.dist + '/fonts'
    },

    html: {
        path: paths.src + '/html',
        pages: paths.src + '/html/pages/**/*.html',
        helpers: './gulp/lib/helpers/*.js',
        partials: paths.src + '/html/{layouts,partials}/**/*.{html,hbs}',
        data: paths.src + '/html/data/**/*.{js,json}',
        dest: paths.dist + '/html'
    },

    icons: {
        src: paths.src + '/svg/icons/**/*.svg',
        dest: paths.dist + '/svg',
        yml: './icons.yml'
    },

    imagemin: {
        src: paths.src + '/img/**/*.{png,jpg,jpeg,gif,ico}',
        dest: paths.dist + '/img'
    },

    js: {
        handlebars: {
            src: paths.src + '/js/tpl/**/*.hbs',
            dest: paths.src + '/js/lib'
        }
    }
};

module.exports = config;
