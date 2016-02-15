/* exported Modernizr */
/* global Modernizr */

/**
 * These should match those defined in
 * `scss/lib/grid/_config`
 */
var CSSBreakpoints = {
    small: {
        min: 320,
        max: 740
    },
    medium: {
        min: 741,
        max: 900
    },
    large: {
        min: 901
    }
};

var Utils = {
    /**
     * Define some media queries to use with enquire.js
     * in an attempt to detect the user's device :/
     *
     * 1. <= Small size viewports only.
     * 2. = Medium size viewports only.
     */
    MQ: {
        small: 'screen and (max-width: ' + CSSBreakpoints.small.max + 'px)', // [1]
        medium: 'screen and (min-width: ' + CSSBreakpoints.medium.min + 'px) and (max-width: ' + CSSBreakpoints.medium.max + 'px)' // [2]
    },

    /**
     * Return current supported vendor prefixed transitionend string.
     * @return {string}
     */
    transitionEnd: function() {
        var trans = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'transition' : 'transitionend'
        };

        return trans[Modernizr.prefixed('transition')];
    },

    /**
     * Crude attempt at detecting local dev env.
     * @return {Boolean} [true|false]
     */
    isLocal: function() {
        return 'html' === window.location.pathname.split('.').pop();
    },

    /**
     * Shamelessly borrowed from: https://github.com/ded/bowser/blob/master/bowser.js
     */
    isIE: function isIE() {
        return /msie|trident/i.test(navigator.userAgent);
    }
};

module.exports = Utils;
