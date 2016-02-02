/**
 * hb-limit.js Handlebars Helper
 * -----------------------------
 * Only return x number of items in an array (slice).
 */
module.exports.register = function(Handlebars) {
    'use strict';

    Handlebars.registerHelper('limit', function (arr, limit) {
        return arr.slice(0, limit);
    });
};
