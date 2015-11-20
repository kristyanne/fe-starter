var $ = require('jquery');

//var tpl = require('../../lib/templates');

/**
 * demo/index.js
 * -------------
 * Just a demo component, that's all :)
 */
module.exports = (function() {
    var $el = $('.js-demo');

    var init = function init() {
        if(!$el.length) { return; }

        console.log( $el, 'oh well hello there!');

        //tplDemo();
    };

    /**
     * Example usage of the precompiled .hbs templates.
     */
    // var tplDemo = function tplDemo() {
    //     var alert = tpl.alert({ message: 'This is a message this is.' });

    //     $(alert).appendTo($el);
    // };

    return {
        init: init
    };
})();
