!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/lit-element"),require("@gotham/gotham-logo/gotham-logo.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/lit-element","@gotham/gotham-logo/gotham-logo.js"],t):t((e=e||self).GothamScienceHeader={},e.litElement)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.header {\n  display: flex;\n  width: auto;\n  justify-content: center;\n  background: purple;\n  padding: 1em;\n  color: white;\n}\n\n.logo {\n  font-size: 1.8em;\n}\n\n.left-section {\n  flex: 1 1 auto;\n}</style>\n<div class="header">\n  <div class="left-section">\n    <div class="logo">\n      <gotham-logo></gotham-logo>\n    </div>\n    <div class="subtitle">\n      ','\n    </div>\n  </div>\n  <div class="right-section">\n    <slot></slot>\n  </div>\n</div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var a=function(e){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,r(n).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.LitElement),o(n,[{key:"render",value:function(){return t.html(u(),this.subtitle)}},{key:"tag",value:function(){return"gotham-science-header"}}],[{key:"properties",get:function(){return{subtitle:{name:"subtitle",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]),o(n,[{key:"connectedCallback",value:function(){l(r(n.prototype),"connectedCallback",this).call(this)}}]),n}();customElements.define("gotham-science-header",a),e.GothamScienceHeader=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=gotham-science-header.umd.js.map