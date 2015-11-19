/**
 * sassLint.js
 * -----------
 *
 * `gulp sasslint`
 */

var gulp     = require('gulp');
var cached   = require('gulp-cached');
var scsslint = require('gulp-scss-lint');

var config = require('../config').scssLint;
var scssLintError = require('../lib/lintError');

gulp.task('scsslint', function() {
    return gulp.src(config.src)
        .pipe(cached('scss-lint'))
        .pipe(scsslint({
            bundleExec:  true,
            config:      '.scss-lint.yml',
            customReport: scssLintError
        }));
});
