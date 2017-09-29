/**
 * `gulp csslint`
 * CSS linting task.
 */
var gulp = require('gulp');
var stylelint = require('gulp-stylelint');
var task = require('../config/tasks').csslint;

gulp.task('csslint', function() {
    return gulp.src(task.src)
        .pipe(stylelint({
            reporters: [{
                failAfterError: false,
                formatter: 'string',
                console: true
            }],
            syntax: 'scss'
        }));
});
