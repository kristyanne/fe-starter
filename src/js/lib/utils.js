var breakpoints = {
    small:  320,
    medium: 700,
    large:  960
};

var Utils = {
    breakpoints: breakpoints,

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
