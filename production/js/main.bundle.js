!function n(t,o,e){function r(u,s){if(!o[u]){if(!t[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=o[u]={exports:{}};t[u][0].call(f.exports,function(n){var o=t[u][1][n];return r(o?o:n)},f,f.exports,n,t,o,e)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)r(e[u]);return r}({1:[function(n,t,o){"use strict";var e=n("./../../lib/utils.js");t.exports=function(){var n={el:"js-demo"},t=void 0,o=function(){var o=document.getElementsByClassName(n.el);return o.length?(console.log(e.isLocal()),t=o[0],console.log(t,"component found!"),void(t.innerHTML="Hello, this is a JS demo :)")):void console.log("ok bye")};return{init:o}}()},{"./../../lib/utils.js":3}],2:[function(n,t,o){"use strict";t.exports={demo:n("./demo")}},{"./demo":1}],3:[function(n,t,o){"use strict";t.exports=function(){return{isLocal:function(){return"html"===window.location.pathname.split(".").pop()},isIE:function(){return/msie|trident/i.test(navigator.userAgent)}}}()},{}],4:[function(n,t,o){"use strict";!function(){var t=n("./components");t.demo.init()}()},{"./components":2}]},{},[4]);