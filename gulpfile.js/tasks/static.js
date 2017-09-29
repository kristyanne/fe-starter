/**
 * `gulp static`
 * Copy assets in ./src/static to the root of .dist/
 */

var gulp = require('gulp');
var task = require('../config/tasks').static;

gulp.task('static', function() {
    return gulp.src(task.src)
        .pipe(gulp.dest(task.dest));
});
