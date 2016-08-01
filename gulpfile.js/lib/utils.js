/**
 * A collection of useful utility functions for the gulp tasks.
 *
 * Since we don't have many yet, it makes sense to keep them
 * here for now but eventually it might be worth splitting them out.
 */

var Utils = {
    vaguePath: function( path ) {
        if(!path) { return; }
        return '.../' + path.split('/').slice(-3).join('/');
    },

    isDev: function() {
        var env = process.env.NODE_ENV || 'development';

        return 'development' === env;
    }
};

module.exports = Utils;
