!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).MemeMaker={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=u(['\n        :host {\n          display: block;\n        }\n        * {\n          box-sizing: border-box;\n        }\n        figure {\n          position: relative;\n          width: 100%;\n          margin: 0;\n          padding: 0;\n          font-size: 20px;\n        }\n        img {\n          width: 100%;\n          height: auto;\n        }\n        .top-text,\n        .bottom-text {\n          position: absolute;\n          left: 0;\n          width: 100%;\n          padding: 3% 2%;\n          text-align: center;\n          text-transform: uppercase;\n          font-weight: 900;\n          font-family: "Impact", "Arial Black", "sans serif";\n          line-height: 1.2;\n          font-size: var(--meme-maker-font-size, 36px);\n          color: white;\n          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n            1px 1px 0 #000;\n          letter-spacing: 2px;\n        }\n        .top-text {\n          top: 0;\n        }\n        .bottom-text {\n          bottom: 0;\n        }\n        @media (max-width: 800px) {\n          .top-text,\n          .bottom-text {\n            font-size: var(--meme-maker-font-size-medium, 20px);\n          }\n        }\n        @media (max-width: 600px) {\n          .top-text,\n          .bottom-text {\n            font-size: var(--meme-maker-font-size-small, 20px);\n          }\n        }\n      ']);return s=function(){return e},e}function f(){var e=u(['\n      <figure>\n        <img\n          loading="lazy"\n          src="','"\n          .alt="','"\n          aria-describedby="','"\n        />\n        <figcaption class="top-text">','</figcaption>\n        <figcaption class="bottom-text">',"</figcaption>\n      </figure>\n    "]);return f=function(){return e},e}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(o,t.LitElement);var n=c(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=n.call(this)).alt="",e}return r(o,[{key:"render",value:function(){return t.html(f(),this.imageUrl,this.alt,this.describedBy||"",this.topText,this.bottomText)}}],[{key:"styles",get:function(){return[t.css(s())]}},{key:"tag",get:function(){return"meme-maker"}}]),r(o,[{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}},{key:"haxHooks",value:function(){return{activeElementChanged:"haxactiveElementChanged",progressiveEnhancement:"haxprogressiveEnhancement",gizmoRegistration:"haxgizmoRegistration"}}},{key:"haxgizmoRegistration",value:function(e){window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{namespace:"meme-maker.haxProperties",localesPath:decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("meme-maker.umd.js",document.baseURI).href)+"/../locales",locales:["es","fr"]}}))}},{key:"haxactiveElementChanged",value:function(e,t){var n=this.shadowRoot.querySelectorAll("figcaption");if(t)for(var r=0;r<n.length;r++)n[r].setAttribute("contenteditable",!0);else{for(r=0;r<n.length;r++)n[r].removeAttribute("contenteditable");this.topText=this.shadowRoot.querySelector(".top-text").innerText,this.bottomText=this.shadowRoot.querySelector(".bottom-text").innerText}return!1}},{key:"haxprogressiveEnhancement",value:function(e){return"\n    ".concat(this.topText?"<div>".concat(this.topText,"</div>"):"",'\n      <img src="').concat(this.imageUrl,'" alt="').concat(this.alt,'" preload="lazy" aria-describedby="').concat(this.describedBy||"",'"/>\n    ').concat(this.bottomText?"<div>".concat(this.bottomText,"</div>"):"")}}],[{key:"properties",get:function(){return{alt:{type:String},describedBy:{type:String,attribute:"described-by"},imageUrl:{type:String,attribute:"image-url",reflect:!0},topText:{type:String,attribute:"top-text",reflect:!0},bottomText:{type:String,attribute:"bottom-text",reflect:!0}}}},{key:"haxProperties",get:function(){return decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("meme-maker.umd.js",document.baseURI).href)+"/../lib/".concat(this.tag,".haxProperties.json")}}]),o}();customElements.define(l.tag,l),e.MemeMaker=l,Object.defineProperty(e,"__esModule",{value:!0})});
