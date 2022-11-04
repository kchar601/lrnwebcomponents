!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/marked-element/marked-element.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@polymer/marked-element/marked-element.js","lit"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).MdBlock={},null,e.lit)}(this,(function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function a(e,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},a(e,n)}function i(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=r(e);if(n){var a=r(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return i(this,t)}}function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var c,d,f,u,h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&a(e,n)}(p,e);var n,r,i,h=s(p);function p(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(e=h.call(this)).markdown="",e.source="",e.innerHTML&&(e.markdown=e.innerHTML.trim(),e.innerHTML=null),e}return n=p,i=[{key:"styles",get:function(){return[t.css(u||(u=l(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n        img {\n          max-width: 100%;\n        }\n\n        h1 {\n          font-size: var(--hax-base-styles-h1-font-size);\n          line-height: var(--hax-base-styles-h1-line-height);\n        }\n\n        h2 {\n          font-size: var(--hax-base-styles-h2-font-size);\n        }\n\n        h3 {\n          font-size: var(--hax-base-styles-h3-font-size);\n        }\n\n        h4 {\n          font-size: var(--hax-base-styles-h4-font-size);\n        }\n\n        h5 {\n          font-size: var(--hax-base-styles-h5-font-size);\n        }\n\n        h6 {\n          font-size: var(--hax-base-styles-h6-font-size);\n        }\n\n        p {\n          min-height: var(--hax-base-styles-p-min-height);\n          font-size: var(--hax-base-styles-p-font-size);\n          line-height: var(--hax-base-styles-p-line-height);\n          letter-spacing: var(--hax-base-styles-p-letter-spacing);\n        }\n\n        a,\n        a:-webkit-any-link {\n          color: var(--hax-base-styles-a-color);\n          font-size: var(--hax-base-styles-a-font-size);\n          font-weight: var(--hax-base-styles-a-font-weight);\n        }\n\n        a:visited {\n          color: var(--hax-base-styles-a-color-visited);\n        }\n\n        a:active,\n        a:focus,\n        a:hover {\n          color: var(--hax-base-styles-a-color-active);\n          font-weight: var(--hax-base-styles-a-font-weight-active);\n        }\n\n        ol,\n        ul ol li,\n        ul li {\n          padding-bottom: var(--hax-base-styles-list-padding-bottom);\n          line-height: var(--hax-base-styles-list-line-height);\n          font-size: var(--hax-base-styles-list-font-size);\n          max-width: var(--hax-base-styles-list-max-width);\n        }\n\n        ol li:last-child,\n        ul li:last-child {\n          padding-bottom: var(--hax-base-styles-list-last-child-padding-bottom);\n        }\n\n        ul,\n        ol {\n          padding-left: var(--hax-base-styles-list-padding-left);\n          padding-left: var(--hax-base-styles-list-margin-left);\n        }\n\n        code {\n          padding: 0.2em 0.4em;\n          margin: 0;\n          font-size: 12px;\n          background-color: var(\n            --hax-base-styles-code-background-color,\n            rgba(175, 184, 193, 0.2)\n          );\n          border-radius: 6px;\n          font-family: var(\n            --hax-base-styles-code-font-family,\n            ui-monospace,\n            monospace\n          );\n        }\n\n        pre {\n          padding: 16px;\n          overflow: auto;\n          line-height: 1.45;\n          background-color: var(\n            --hax-base-styles-pre-background-color,\n            rgba(175, 184, 193, 0.2)\n          );\n          border-radius: 6px;\n          margin-bottom: 0;\n          word-break: normal;\n          word-wrap: normal;\n          margin-top: 0;\n          font-family: var(\n            --hax-base-styles-pre-font-family,\n            ui-monospace,\n            monospace\n          );\n          font-size: 12px;\n        }\n        pre code {\n          background-color: transparent;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Markdown",description:"A block of markdown content directly or remote loaded",icon:"icons:code",color:"yellow",groups:["Block"],handles:[],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"markdown",title:"Markdown",description:"Raw markdown",inputMethod:"textarea"},{property:"source",title:"Source",description:"Source file for markdown",inputMethod:"haxupload"}],advanced:[]},demoSchema:[{tag:"md-block",properties:{markdown:"- The first bulleted item in a long list.."},content:""}]}}},{key:"properties",get:function(){return{source:{type:String},markdown:{type:String}}}},{key:"tag",get:function(){return"md-block"}}],(r=[{key:"render",value:function(){return t.html(c||(c=l([" <div>\n      ","\n    </div>"])),this.markdown&&""==this.source?t.html(d||(d=l([' <marked-element markdown="','">\n            <div slot="markdown-html"></div>\n          </marked-element>'])),this.markdown):t.html(f||(f=l([' <marked-element>\n            <div slot="markdown-html"></div>\n            <script\n              type="text/markdown"\n              .src="','"\n            ><\/script>\n          </marked-element>'])),this.source?this.source:void 0))}}])&&o(n.prototype,r),i&&o(n,i),Object.defineProperty(n,"prototype",{writable:!1}),p}(t.LitElement);window.customElements.define(h.tag,h),e.MdBlock=h,Object.defineProperty(e,"__esModule",{value:!0})}));
