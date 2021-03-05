!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/a11y-details/a11y-details.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/a11y-details/a11y-details.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],e):e((t=t||self).A11yGifPlayer={},t.litElement_js,t.schemaBehaviors_js)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function y(){var t=d(['\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        .sr-only {\n          position: absolute;\n          left: -9999999px;\n          top: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        #container {\n          padding: 0;\n          margin: 0;\n          position: relative;\n          border: var(--a11y-gif-player-border, none);\n          border-radius: var(--a11y-gif-player-border-radius, 0);\n        }\n        img {\n          width: 100%;\n        }\n        button {\n          position: absolute;\n          width: 100%;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          background-size: contain;\n          background-color: var(--a11y-gif-player-button-bg, #cccccc);\n        }\n        button:active,\n        button:focus,\n        button:hover {\n          border: var(--a11y-gif-player-focus-border, none);\n          outline: var(--a11y-gif-player-outline, 3px solid);\n        }\n        button[disabled] {\n          cursor: var(--a11y-gif-player-disabled-cursor, not-allowed);\n        }\n        button[aria-pressed="true"] {\n          opacity: 0;\n        }\n        svg {\n          position: absolute;\n          top: 35%;\n          left: 35%;\n          width: var(--a11y-gif-player-arrow-size, 30%);\n          height: var(--a11y-gif-player-arrow-size, 30%);\n        }\n        g {\n          opacity: var(--a11y-gif-player-arrow-opacity, 0.5);\n        }\n        button:not([disabled]):active g,\n        button:not([disabled]):hover g,\n        button:not([disabled]):focus g {\n          opacity: var(--a11y-gif-player-button-focus-opacity, 0.7);\n        }\n        polygon {\n          fill: var(--a11y-gif-player-button-color, #000000);\n          stroke: var(--a11y-gif-player-arrow-border-color, #ffffff);\n          stroke-width: var(--a11y-gif-player-arrow-border-width, 15px);\n        }\n        text {\n          fill: var(--a11y-gif-player-button-text-color, #ffffff);\n        }\n        #longdesc {\n          position: absolute;\n          left: 2px;\n          bottom: 2px;\n          width: calc(100% - 2px);\n          font-size: 80%;\n        }\n        simple-tooltip {\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n        }\n      ']);return y=function(){return t},t}function f(){var t=d(['\n      <div id="container">\n        <slot hidden></slot>\n        <img\n          id="gif"\n          src="','"\n          alt="','"\n          aria-describedby="'," ",'"\n          ?hidden="','"\n          slot="summary"\n        />\n        <button\n          id="button"\n          aria-controls="gif"\n          aria-pressed="','"\n          @click="','"\n          ?disabled="','"\n          style="background-image: url(\'','\')"\n        >\n          <svg\n            id="svg"\n            aria-hidden="true"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 200 200"\n          >\n            <g>\n              <polygon points="30,20 30,180 170,100"></polygon>\n              <text x="50" y="115" font-size="40px">GIF</text>\n            </g>\n          </svg>\n          <span class="sr-only">\n            ','\n          </span>\n        </button>\n        <a11y-details\n          id="longdesc"\n          ?hidden="','"\n          style="opacity:','"\n        >\n          <div slot="summary">info</div>\n          <div slot="details">','</div>\n        </a11y-details>\n      </div>\n      <simple-tooltip for="button" offset="30" animation-delay="0">\n        ',"\n      </simple-tooltip>\n    "]);return f=function(){return t},t}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(g,n.SchemaBehaviors(e.LitElement));var o,r,c,d=p(g);function g(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g),(t=d.call(this)).disabled=!1,t.tooltip="Toggle animation",t.__playing=!1,t._updateFromSlot(),t}return o=g,c=[{key:"styles",get:function(){return[e.css(y())]}},{key:"tag",get:function(){return"a11y-gif-player"}},{key:"properties",get:function(){return a(a({},u(s(g),"properties",this)),{},{alt:{type:String},disabled:{type:Boolean},describedBy:{attribute:"described-by",type:String},longdesc:{type:String,attribute:"longdesc"},src:{type:String},srcWithoutAnimation:{type:String,attribute:"src-without-animation"},tooltip:{type:String},tooltipPlaying:{type:String,attribute:"tooltip-playing"},__playing:{type:Boolean}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Accessible GIF",description:"Makes animated GIFs accessible.",icon:"gif",color:"grey",groups:["Images","Media"],handles:[{type:"image",source:"src",source2:"srcWithoutAnimation",alt:"alt",ariaDescribedby:"describedBy"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"src",title:"Animated GIF",description:"The URL to your animated GIF.",inputMethod:"haxupload",icon:"link",validationType:"url",required:!0},{property:"srcWithoutAnimation",title:"Still Image",description:"The URL to a still image version of your GIF.",inputMethod:"haxupload",icon:"link",validationType:"url",required:!0},{property:"alt",title:"Alt Text",description:"Alternative text for the image.",inputMethod:"alt",icon:"accessibility",required:!0},{property:"longdesc",title:"Long Description",description:"Long descriptions of the GOF for accessibiility",inputMethod:"textarea"}],advanced:[{property:"describedBy",title:"aria-decsribedby",description:"Space-separated id list for long descriptions that appear elsewhere",inputMethod:"textfield"}]},demoSchema:[{tag:"a11y-gif-player",properties:{alt:"It's Always Sunny in Philadelphia Pepe Silvia Meme with GIFs",src:"https://media0.giphy.com/media/zHaPZZvl6cVHi/giphy.gif",srcWithoutAnimation:"https://media0.giphy.com/media/zHaPZZvl6cVHi/480w_s.jpg",longdesc:"Pepe Silvia scene from It's Always Sunny in Philadelphia. Jesus, dude, you're still making GIFs. The GIF's don't stop.",style:"max-width:400px"}}]}}}],(r=[{key:"render",value:function(){return e.html(f(),this.src,this.alt,this.longdesc?"longdesc":"",(this.describedBy||"").trim(),!this.src,this.__playing?"true":"false",this.toggle,this.disabled||!this.src,this.srcWithoutAnimation,this.__playing&&this.tooltipPlaying?this.tooltipPlaying:this.tooltip,!this.src||!this.longdesc,this.__playing?0:1,this.longdesc,this.__playing&&this.tooltipPlaying?this.tooltipPlaying:this.tooltip)}},{key:"connectedCallback",value:function(){var t=this;u(s(g.prototype),"connectedCallback",this)&&u(s(g.prototype),"connectedCallback",this).call(this),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),window.addEventListener("beforeprint",function(e){t.shadowRoot.querySelector("#longdesc").toggleOpen()}),window.addEventListener("afterprint",function(e){t.shadowRoot.querySelector("#longdesc").toggleOpen()})}},{key:"disconnectedCallback",value:function(){var t=this;u(s(g.prototype),"disconnectedCallback",this)&&u(s(g.prototype),"disconnectedCallback",this).call(this),this.observer.disconnect(),window.removeEventListener("beforeprint",function(e){t.shadowRoot.querySelector("#longdesc").toggleOpen()}),window.removeEventListener("afterprint",function(e){t.shadowRoot.querySelector("#longdesc").toggleOpen()})}},{key:"play",value:function(){this.__playing=!0}},{key:"stop",value:function(){this.__playing=!1}},{key:"toggle",value:function(){this.__playing?this.stop():this.play()}},{key:"toggleAnimation",value:function(){this.__playing?this.stop():this.play()}},{key:"_updateFromSlot",value:function(){var t=this.querySelector("img"),e=t?t.src:void 0,n=t?t.alt:void 0;e&&(this.srcWithoutAnimation=e),n&&(this.alt=n)}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(){return t._updateFromSlot()})}}])&&i(o.prototype,r),c&&i(o,c),g}();window.customElements.define(g.tag,g),t.A11yGifPlayer=g,Object.defineProperty(t,"__esModule",{value:!0})});
