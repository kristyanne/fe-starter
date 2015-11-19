/**
 * lintError.js
 * ============
 *
 * Handler function for linting (sass-lint) errors using gulp
 * notify (https://www.npmjs.com/package/gulp-notify).
 */

var notify = require('gulp-notify');
var gutil = require('gulp-util');
var colours = gutil.colors;

module.exports = function scssLintError( file ) {
    if (!file.scsslint.success) {
        // Log to Console...
        gutil.log(colours.cyan(file.scsslint.issues.length) + ' issues found in ' + colours.magenta(file.path));

        file.scsslint.issues.forEach(function( issue ) {
            var severity = issue.severity === 'warning' ? ' [W] ' : ' [E] ';
            var linter = issue.linter ? (issue.linter + ': ') : '';
            var logMsg = file.relative + ':' + issue.line + severity + linter + issue.reason;

            notify.onError(function() {
                return {
                    title: 'Scss-lint Error.',
                    message: logMsg
                };
            }).call(this, issue);
        });
    }
};
