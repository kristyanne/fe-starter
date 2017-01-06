/**
 * Handlebars Helper
 * -----------------
 * Basic for loop to repeat a block of content x times.
 *
 * Usage:
 * {{#times 4}}<div>Hello</div>{{/times}}
 *
 * Output:
 * <div>Hello</div>
 * <div>Hello</div>
 * <div>Hello</div>
 * <div>Hello</div>
 */
module.exports.register = function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('times', function(num, block) {
        var val = '';

        for(var i = 1; i <= num; ++i) {
            val += block.fn(i);
        }

        return val;
    });
};
