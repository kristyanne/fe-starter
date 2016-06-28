/**
 * bh-repeat.js Handlebars Helper
 * ------------------------------
 * Repeat array x number of times.
 *
 * HB Usage: {{#each (repeat array_here 2)}}{{/each}}
 */
module.exports.register = function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('repeat', function (arr, count) {
        var items = [];

        for(var i = 0; i < count; i++) {
            for(var x = 0; x < arr.length; x++) {
                items.push(arr[x]);
            }
        }

        return items;
    });
};
