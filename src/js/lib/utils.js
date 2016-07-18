module.exports = (function() {
    /**
     * These should match those defined in `scss/settings/_grid`.
     *
     * Might be nice if both the CSS and JS could share this.
     * Hmm..
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

    return {
        /**
         * Define some media queries to use with enquire.js in an attempt
         * to detect the user's device :/
         *
         * 1. <= Small size viewports only.
         * 2. = Medium size viewports only.
         */
        MQ: {
            small: 'screen and (max-width: ' + CSSBreakpoints.small.max + 'px)', // [1]
            medium: 'screen and (min-width: ' + CSSBreakpoints.medium.min + 'px) and (max-width: ' + CSSBreakpoints.medium.max + 'px)' // [2]
        },

        /**
         * Crude attempt at detecting local dev env.
         * @return {Boolean} [true|false]
         */
        isLocal: function() {
            return window.location.pathname.split('.').pop() === 'html';
        },

        /**
         * Shamelessly borrowed from: https://github.com/ded/bowser/blob/master/bowser.js
         */
        isIE: function isIE() {
            return /msie|trident/i.test(navigator.userAgent);
        }
    };
})();
