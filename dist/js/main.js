(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
module.exports = {
    demo: require('./demo')
};

},{"./demo":1}],3:[function(require,module,exports){
(function (global){
// Import Dependencies
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

// Import Components
var components = require('./components');

$(function() {
    components.demo.init();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components":2}]},{},[3])


//# sourceMappingURL=main.js.map
