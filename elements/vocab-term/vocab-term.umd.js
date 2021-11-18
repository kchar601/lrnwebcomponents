!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("@lrnwebcomponents/simple-modal/lib/simple-modal-template.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-popover/simple-popover.js","@lrnwebcomponents/simple-modal/lib/simple-modal-template.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VocabTerm={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var l=o(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return i(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c,f,m,d,h,y,v,b,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(O,e);var i,p,g,w=l(O);function O(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,O),(e=w.call(this)).closeText="",e.openText="",e.popoverMode=!1,e.term="",e.querySelector("summary")&&(e.term=e.querySelector("summary").innerText),e.information="",e.querySelector('[slot="information"]')&&(e.information=e.querySelector('[slot="information"]').innerText),e.links=[],e.querySelector(".links a")&&e.querySelectorAll(".links a").forEach((function(t){console.log(t),console.log(t.innerText),e.links.push({title:t.innerText,href:t.getAttribute("href")})})),e}return i=O,g=[{key:"properties",get:function(){return{popoverMode:{type:Boolean,reflect:!0,attribute:"popover-mode"},links:{type:Array}}}},{key:"styles",get:function(){var e=[];return s(o(O),"styles",this)&&(e=s(o(O),"styles",this)),[].concat(u(e),[t.css(b||(b=a(["\n        :host {\n          display: inline-flex;\n        }\n        simple-modal-template {\n          --simple-modal-resize: both;\n          --simple-modal-width: 300px;\n          --simple-modal-height: 300px;\n          --simple-modal-min-width: 300px;\n          --simple-modal-min-height: 300px;\n        }\n        summary {\n          list-style: none;\n          border-bottom: 1px dashed gray;\n        }\n      "])))])}},{key:"tag",get:function(){return"vocab-term"}}],(p=[{key:"render",value:function(){return t.html(c||(c=a([" ",""])),this.popoverMode?t.html(h||(h=a(['\n          <details>\n            <summary id="summary">','</summary>\n            <simple-popover for="summary" position="top">\n              <p>',"</p>\n              ","\n            </simple-popover>\n          </details>\n        "])),this.term,this.information,this.links.length>0?t.html(y||(y=a(["\n                    <ul>\n                      ","\n                    </ul>\n                  "])),this.links.map((function(e){return t.html(v||(v=a(['\n                          <li><a href="','">',"</a></li>\n                        "])),e.href,e.title)}))):""):t.html(f||(f=a(['\n          <div>\n            <summary id="summary">','</summary>\n            <simple-modal-template>\n              <div slot="header">','</div>\n              <p slot="content">',"</p>\n              ",'\n              <div slot="buttons">\n                <button dialog-dismiss>Close Modal</button>\n              </div>\n            </simple-modal-template>\n          </div>\n        '])),this.term,this.term,this.information,this.links.length>0?t.html(m||(m=a([' <ul slot="content">\n                    ',"\n                  </ul>"])),this.links.map((function(e){return t.html(d||(d=a(['\n                        <li><a href="','">',"</a></li>\n                      "])),e.href,e.title)}))):""))}},{key:"_handleClick",value:function(e){this.details&&void 0===this.details.open&&(this.toggleOpen(),e.preventDefault(),e.stopPropagation())}},{key:"_handleKeyup",value:function(e){(this.details&&void 0===this.details.open&&13==e.keyCode||32==e.keyCode)&&(this.toggleOpen(),e.preventDefault(),e.stopPropagation())}},{key:"toggleOpen",value:function(){this.details.hasAttribute("open")?(this.details.removeAttribute("open"),this.details.open&&(this.details.open=!1)):(this.details.setAttribute("open",""),this.details.open&&(this.details.open=!0))}},{key:"firstUpdated",value:function(e){s(o(O.prototype),"firstUpdated",this)&&s(o(O.prototype),"firstUpdated",this).call(this,e),0==this.popoverMode&&(this.shadowRoot.querySelector("simple-modal-template").associateEvents(this.shadowRoot.querySelector("summary")),this.shadowRoot.querySelector("summary").addEventListener("focus",this.detailsFocusOut.bind(this)))}},{key:"detailsFocusOut",value:function(){this.shadowRoot.querySelector("details").removeAttribute("open"),this.shadowRoot.querySelector("summary").removeEventListener("focus",this.detailsFocusOut.bind(this))}},{key:"updated",value:function(e){s(o(O.prototype),"updated",this)&&s(o(O.prototype),"updated",this).call(this,e),e.forEach((function(e,t){}))}}])&&n(i.prototype,p),g&&n(i,g),O}(t.LitElement);customElements.define(g.tag,g),e.VocabTerm=g,Object.defineProperty(e,"__esModule",{value:!0})}));
