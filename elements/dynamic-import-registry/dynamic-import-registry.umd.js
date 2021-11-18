!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).DynamicImportRegistry={})}(this,(function(t){"use strict";function e(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,n){return(a=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return a(t,arguments,r(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)})(t)}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}
/**
   * Copyright 2020 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
window.DynamicImportRegistry=window.DynamicImportRegistry||{},window.DynamicImportRegistry.requestAvailability=function(){return window.DynamicImportRegistry.instance||(window.DynamicImportRegistry.instance=document.createElement("dynamic-import-registry"),document.body.appendChild(window.DynamicImportRegistry.instance)),window.DynamicImportRegistry.instance};var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(h,t);var a,c,s,l,f,p,d,y=(a=h,c=o(),function(){var t,e=r(a);if(c){var n=r(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=y.call(this)).list={},t.__loaded={},t.basePath=new URL("./../../","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("dynamic-import-registry.umd.js",document.baseURI).href).href,window.WCAutoloadBasePath?t.basePath=window.WCAutoloadBasePath:window.WCGlobalBasePath&&(t.basePath=window.WCGlobalBasePath),t}return s=h,l=[{key:"connectedCallback",value:function(){window.addEventListener("dynamic-import-registry--register",this.registerDefinitionEvent.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("dynamic-import-registry--register",this.registerDefinitionEvent.bind(this))}},{key:"register",value:function(t){t.tag&&t.path?this.list[t.tag]||(this.list[t.tag]=t.path):console.warn("DynamicImportRegistry: registration requires tag and path be set")}},{key:"registerDefinitionEvent",value:function(t){t.detail.tag&&t.detail.path&&this.register(t.detail)}},{key:"loadDefinition",value:(p=regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=e.toLowerCase(),window.customElements.get(e)||!this.list[e]||this.__loaded[e]){t.next=13;break}return this.__loaded[e]=!0,t.prev=3,t.next=6,import("".concat(this.basePath).concat(this.list[e])).then((function(t){n.dispatchEvent(new CustomEvent("dynamic-import-registry-loaded",{detail:{tag:e,path:n.list[e],module:t}}))}));case 6:t.next=13;break;case 8:t.prev=8,t.t0=t.catch(3),console.warn("".concat(this.basePath).concat(this.list[e])),console.warn(t.t0),this.dispatchEvent(new CustomEvent("dynamic-import-registry-failure",{detail:{tag:e,path:this.list[e],module:null}}));case 13:case"end":return t.stop()}}),t,this,[[3,8]])})),d=function(){var t=this,n=arguments;return new Promise((function(r,i){var o=p.apply(t,n);function a(t){e(o,r,i,a,c,"next",t)}function c(t){e(o,r,i,a,c,"throw",t)}a(void 0)}))},function(t){return d.apply(this,arguments)})}],f=[{key:"tag",get:function(){return"dynamic-import-registry"}}],l&&n(s.prototype,l),f&&n(s,f),h}(c(HTMLElement));window.customElements.define(s.tag,s),t.DynamicImportRegistry=s,Object.defineProperty(t,"__esModule",{value:!0})}));
