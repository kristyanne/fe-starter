/**
 * `gulp images`
 * Optimise and copy image files.
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var task = require('../config/tasks').images;

gulp.task('images', function() {
    return gulp.src(task.src)
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest(task.dest));
});
