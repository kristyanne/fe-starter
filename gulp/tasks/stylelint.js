var gulp = require('gulp');
var cached = require('gulp-cached');
var stylelint = require('gulp-stylelint');

var config = require('../config').cssLint;

gulp.task('css-lint', function() {
    return gulp.src(config.src)
        .pipe(cached('css-lint'))
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ],
            syntax: 'scss'
        }));
});
