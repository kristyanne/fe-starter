/**
 * `gulp svg`
 */
var gulp = require('gulp');
var task = require('../config/tasks').svg;

gulp.task('svg', function() {
    return gulp.src(task.src)
        .pipe(gulp.dest(task.dest));
});
