var layouts = require('handlebars-layouts');

module.exports.register = function( handlebars ) {
    handlebars.registerHelper(layouts(handlebars));
};
