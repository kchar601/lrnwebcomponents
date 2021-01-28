!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@polymer/polymer/lib/elements/custom-style.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@polymer/polymer/lib/elements/custom-style.js","@polymer/app-layout/app-drawer/app-drawer.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],n):n((e=e||self).SimpleDrawer={},e.litElement_js,e.simpleColors_js)}(this,function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d(this,t)}}function f(e,n,t){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(){var e=h(["\n:host {\n  display: block;\n  z-index: 1000;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host div::slotted(*) {\n  font-size: 14px;\n}\n\n.content {\n  text-align: left;\n  padding: 8px 24px;\n}\n\n.top ::slotted(*) {\n  font-size: 24px;\n  margin: 0;\n  padding: 0 15px;\n  height: 40px;\n  line-height: 48px;\n}\n\n#close {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  padding: 4px 6px 4px 4px;\n  margin: 11px 5px 0px 0px;\n  text-transform: none;\n  float: right;\n  font-size: var(--simple-drawer-close-font-size, 12px);\n  color: var(--simple-drawer-header-color, #ffffff);\n  background-color: var(--simple-drawer-close-background, transparent);\n  border: var(--simple-drawer-close-border);\n  cursor: pointer;\n  min-width: unset;\n}\n\n#close simple-icon {\n  display: inline-block;\n  --simple-icon-width: 16px;\n  --simple-icon-height: 16px;\n  margin-top: -2px;\n  margin-right: 2px;\n}\n\n.top {\n  font-size: 24px;\n  margin: 0 0 8px 0;\n  padding: 0 16px;\n  height: 64px;\n  line-height: 64px;\n  display: flex;\n  text-align: left;\n  justify-content: space-between;\n  background-color: var(--simple-drawer-header-background, #20427b);\n  color: var(--simple-drawer-header-color, #ffffff);\n}\n\n.top h2 {\n  flex: auto;\n  color: var(--simple-drawer-header-color, #ffffff);\n  font-size: 24px;\n  padding: 0;\n  line-height: 45px;\n  margin: 8px;\n}\n      "]);return w=function(){return e},e}function b(){var e=h(["<h2>","</h2>"]);return b=function(){return e},e}function v(){var e=h(['\n\n<custom-style>\n  <style>\n  app-drawer {\n    --app-drawer-content-container: {\n      padding: 0;\n      overflow-y: scroll;\n      position: fixed;\n      color: var(--simple-drawer-color, #222222);\n      background-color: var(--simple-drawer-background-color, #FFFFFF);\n    }\n  }\n  :host ::slotted(*) {\n    @apply --simple-drawer-content;\n  }\n\n  .content {\n    @apply --simple-drawer-content-container;\n  }\n  .top {\n    @apply --simple-drawer-header;\n  }\n\n  .top h2 {\n    @apply --simple-drawer-heading;\n  }\n  </style>\n</custom-style>\n<app-drawer tabindex="0" id="drawer" ?opened="','" @opened-changed="','" .align="','" role="dialog">\n  <div class="wrapper">\n    <div class="top">\n      ','\n      <slot name="header"></slot>\n    </div>\n    <div class="content">\n      <slot name="content"></slot>\n    </div>\n    <button id="close" @click="','">\n      <simple-icon icon="','" dark contrast="4"></simple-icon> ',"\n    </button>\n  </div>\n</app-drawer>"]);return v=function(){return e},e}window.SimpleDrawer=window.SimpleDrawer||{},window.SimpleDrawer.requestAvailability=function(){return window.SimpleDrawer.instance||(window.SimpleDrawer.instance=document.createElement("simple-drawer"),document.body.appendChild(window.SimpleDrawer.instance)),window.SimpleDrawer.instance};var g=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(l,t.SimpleColors);var o=u(l);function l(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).title="",e.align="left",e.opened=!1,e.closeLabel="Close",e.closeIcon="icons:cancel",e}return i(l,[{key:"render",value:function(){return n.html(v(),this.opened,this.__openedChanged,this.align,this.title?n.html(b(),this.title):"",this.close,this.closeIcon,this.closeLabel)}}],[{key:"styles",get:function(){return[].concat(m(f(c(l),"styles",this)),[n.css(w())])}},{key:"properties",get:function(){return a(a({},f(c(l),"properties",this)),{},{title:{name:"title",type:String},align:{name:"align",type:String},opened:{name:"opened",type:Boolean,reflect:!0},closeLabel:{name:"closeLabel",type:String},closeIcon:{name:"closeIcon",type:String},invokedBy:{name:"invokedBy",type:Object}})}},{key:"tag",get:function(){return"simple-drawer"}}]),i(l,[{key:"firstUpdated",value:function(e){window.addEventListener("simple-drawer-hide",this.close.bind(this)),window.addEventListener("simple-drawer-show",this.showEvent.bind(this))}},{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){"opened"==t&&n._openedChanged(n[t],e)})}},{key:"showEvent",value:function(e){var n=this;if(this.opened){for(;null!==this.firstChild;)this.removeChild(this.firstChild);setTimeout(function(){n.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.clone)},100)}else this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.size,e.detail.clone)}},{key:"show",value:function(e,n,t){var r,o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"256px",s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.invokedBy=t,this.title=e,this.align=i,this.shadowRoot.querySelector("#drawer").updateStyles({"--app-drawer-width":l});var a=["header","content"];for(var c in a)n[a[c]]&&((r=s?n[a[c]].cloneNode(!0):n[a[c]]).setAttribute("slot",a[c]),this.appendChild(r));setTimeout(function(){o.opened=!0,window.dispatchEvent(new Event("resize"))},100)}},{key:"animationEnded",value:function(e){var n=this;for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&async.microTask.run(function(){setTimeout(function(){n.invokedBy.focus()},500)})}},{key:"close",value:function(){this.opened=!1}},{key:"__openedChanged",value:function(e){this.opened=e.detail.value}},{key:"_openedChanged",value:function(e,n){if("undefined"===r(e)||e){if(e){var t=new CustomEvent("simple-drawer-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(t)}}else{this.animationEnded();var o=new CustomEvent("simple-drawer-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(o)}}},{key:"disconnectedCallback",value:function(){window.removeEventListener("simple-drawer-hide",this.close.bind(this)),window.removeEventListener("simple-drawer-show",this.showEvent.bind(this)),f(c(l.prototype),"disconnectedCallback",this).call(this)}}]),l}();window.customElements.define(g.tag,g),e.SimpleDrawer=g,Object.defineProperty(e,"__esModule",{value:!0})});
