/**
 * Handlebars Helper
 * -----------------
 * Repeat array/block x number of times.
 *
 * Usage:
 * var arr = ['dog', 'cat'];
 * {{#each (repeat arr 2)}}<div>{{ this }}</div>{{/each}}
 *
 * Output:
 * <div>dog</div>
 * <div>cat</div>
 * <div>dog</div>
 * <div>cat</div>
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
