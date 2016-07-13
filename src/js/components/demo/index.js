/**
 * Just a demo component, that's all :)
 */
module.exports = (function() {
    var selectors = {
        el: 'js-demo'
    };

    var component;

    var init = function() {
        var el = document.getElementsByClassName(selectors.el);

        if(!el.length) {
            console.log('ok bye');
            return;
        }

        component = el[0];

        console.log(component, 'component found!');
        component.innerHTML = 'Hello, this is a JS demo :)';
    };

    return {
        init: init
    };
})();
