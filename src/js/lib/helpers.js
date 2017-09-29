/**
 * A basic forEach solution that can be used to iterate over a NodeList
 * or Array. This is so we can avoid the `[].forEach.call` hack.
 */
export function forEach(array, callback, scope) {
    for(let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}

/**
 * Get the current scroll position for the document.
 * @return {Object}
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX
 */
export function scrollPosition() {
    const legacy = typeof window.scrollY === 'undefined';

    return {
        x: (legacy ? window.pageXOffset : window.scrollX),
        y: (legacy ? window.pageYOffset : window.scrollY)
    };
}
