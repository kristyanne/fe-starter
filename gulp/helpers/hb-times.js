/**
 * hb-times.js Handlebars Helper
 * -----------------------------
 * (very) basic for loop.
 */
module.exports.register = function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('times', function(num, block) {
        var val = '';

        for(var i = 0; i < num; ++i) {
            val += block.fn(i);
        }

        return val;
    });
};
