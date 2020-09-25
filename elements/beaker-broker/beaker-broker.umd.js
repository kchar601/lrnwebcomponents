!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).BeakerBroker={},e.litElement_js)}(this,function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r,n,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var u=e.apply(t,r);function c(e){n(u,o,i,c,a,"next",e)}function a(e){n(u,o,i,c,a,"throw",e)}c(void 0)})}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function d(e,t,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function b(){var e,t,r=(e=["\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return b=function(){return r},r}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,t.LitElement);var n=y(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=n.call(this)).datUrl=window.location.host,e}return u(i,[{key:"render",value:function(){return t.html(b())}},{key:"firstUpdated",value:function(){"undefined"===("undefined"==typeof DatArchive?"undefined":r(DatArchive))&&console.warn("Beaker is not available from this site loading methodology")}}],[{key:"haxProperties",get:function(){return{}}},{key:"properties",get:function(){return f(f({},d(s(i),"properties",this)),{},{archive:{type:Object},datUrl:{type:String,attribute:"dat-url"}})}},{key:"tag",get:function(){return"beaker-broker"}}]),u(i,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,r){"archive"==r&&t.dispatchEvent(new CustomEvent("archive-changed",{detail:{value:t[r]}})),"datUrl"==r&&(t._datUrlChanged(t[r]),t.dispatchEvent(new CustomEvent("dat-url-changed",{detail:{value:t[r]}})))})}},{key:"_datUrlChanged",value:function(){var e=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==("undefined"==typeof DatArchive?"undefined":r(DatArchive))&&t&&(this.archive=new DatArchive(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"write",value:function(){var e=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.archive.writeFile(t,r);case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=o(regeneratorRuntime.mark(function e(t,r){var n,o,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n="utf8",e.t0=r,e.next="jpeg"===e.t0?4:"jpg"===e.t0?4:"png"===e.t0?11:"base64"===e.t0?18:23;break;case 4:return n="binary",e.next=7,this.archive.readFile(t,n);case 7:return i=e.sent,u=new Blob([i],{type:"image/jpeg"}),o=URL.createObjectURL(u),e.abrupt("break",28);case 11:return n="binary",e.next=14,this.archive.readFile(t,n);case 14:return i=e.sent,u=new Blob([i],{type:"image/png"}),o=URL.createObjectURL(u),e.abrupt("break",28);case 18:return e.next=20,this.archive.readFile(t,r);case 20:return c=e.sent,o="data:image/png;base64,"+c,e.abrupt("break",28);case 23:return e.next=25,this.archive.readFile(t,r);case 25:return c=e.sent,o=c,e.abrupt("break",28);case 28:return e.next=30,o;case 30:return e.abrupt("return",e.sent);case 31:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}]),i}();window.customElements.define(h.tag,h),e.BeakerBroker=h,Object.defineProperty(e,"__esModule",{value:!0})});
