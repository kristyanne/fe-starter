/**
 * Handlebars Helper
 * -----------------
 * Only return x number of items in an array (slice).
 *
 * Usage:
 * var arr = ['dog', 'cat', 'bear'];
 * {{#each (limit arr 2)}}<div>{{ this }}</div>{{/each}}
 *
 * Output:
 * <div>dog</div>
 * <div>cat</div>
 */
module.exports.register = function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('limit', function (arr, limit) {
        return arr.slice(0, limit);
    });
};
