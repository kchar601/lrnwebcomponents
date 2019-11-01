!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-meta/iron-meta.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@lrnwebcomponents/lrn-shared-styles/lrn-shared-styles.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-meta/iron-meta.js","@polymer/iron-flex-layout/iron-flex-layout.js","@lrnwebcomponents/lrn-shared-styles/lrn-shared-styles.js"],t):t((e=e||self).LrnIcon={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){var e,t,n=(e=['\n      <style include="lrn-shared-styles">\n        :host {\n          position: relative;\n\n          vertical-align: middle;\n\n          fill: var(--lrn-icon-fill-color, currentcolor);\n          stroke: var(--lrn-icon-stroke-color, none);\n\n          width: var(--lrn-icon-width, 24px);\n          height: var(--lrn-icon-height, 24px);\n          @apply --layout-inline;\n          @apply --layout-center-center;\n          @apply --lrn-icon;\n        }\n      </style>\n      <iron-icon icon$="lrn:[[icon]]"></iron-icon>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return n},n}var c=function(e){function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r(this,i(c).apply(this,arguments))}var l,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(c,t.PolymerElement),l=c,u=[{key:"template",get:function(){return t.html(s())}},{key:"tag",get:function(){return"lrn-icon"}},{key:"properties",get:function(){return{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:document.createElement("iron-meta",{type:"iconset"})}}}},{key:"observers",get:function(){return["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"]}}],(a=[{key:"_iconChanged",value:function(e){this._iconName=e,this._iconsetName="lrn",this._updateIcon()}},{key:"_srcChanged",value:function(e){this._updateIcon()}},{key:"_usesIconset",value:function(){return this.icon||!this.src}},{key:"_updateIcon",value:function(){this._usesIconset()?(this._img&&this._img.parentNode&&this.root.removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),window.removeEventListener("lrn-iconset-added",this._updateIcon.bind(this))):window.addEventListener("lrn-iconset-added",this._updateIcon.bind(this)))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,this.root.appendChild(this._img))}}])&&n(l.prototype,a),u&&n(l,u),c}();window.customElements.define(c.tag,c),e.LrnIcon=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-icon.umd.js.map
