/**
 * `gulp fonts`
 * Copy font assets found in `./src/fonts`.
 */
var gulp = require('gulp');
var task = require('../config/tasks').fonts;

gulp.task('fonts', function() {
    return gulp.src(task.src)
        .pipe(gulp.dest(task.dest));
});
