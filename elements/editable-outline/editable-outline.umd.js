!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/editor-icons.js"),require("@lrnwebcomponents/json-outline-schema/json-outline-schema.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/editor-icons.js","@lrnwebcomponents/json-outline-schema/json-outline-schema.js"],t):t((e=e||self).EditableOutline={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var u=[Node.ELEMENT_NODE,Node.TEXT_NODE,Node.DOCUMENT_FRAGMENT_NODE];function s(e,t,n){var o,i=t.childNodes||t.children;if(!i)return t;for(var r=0;r<i.length;++r){var l=i[n?r:i.length-1-r];if((o=l,u.includes(o.nodeType))&&e.containsNode(l,!0))return e.containsNode(l,!1)?l:s(e,l,n)}return t}var c=function(){if(document.createElement("div").attachShadow({mode:"open"}).getSelection)return document.addEventListener("selectionchange",function(e){document.dispatchEvent(new CustomEvent("-shadow-selectionchange"))}),function(){};var e=!1,t=[];return document.addEventListener("selectionchange",function(n){e||(document.dispatchEvent(new CustomEvent("-shadow-selectionchange")),e=!0,window.setTimeout(function(){e=!1},0),t.forEach(function(e){return e(n)}))}),function(e){return t.push(e)}}(),p=!1,f=null;function m(e,t,n){for(var o=t;(t=b(t,n))&&t.contains(o););return!!t&&(t instanceof Element&&e.containsNode(t,!0))}function b(e,t){if(!t)return e.previousSibling||e.parentNode||null;for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}return null}function g(e){return e.nodeType!==Node.TEXT_NODE?0:/^\s*/.exec(e.textContent)[0].length}c(function(e){"Caret"===window.getSelection().type?p=!0:p&&!f&&(f=Promise.resolve(!0).then(function(){p=!1,f=null}))});var h=new Map;function y(e){if(e.getSelection){var t=e.getSelection();return t.rangeCount?t.getRangeAt(0):null}var n=h.get(e);if(n)return n;var o=window.getSelection().toString(),i=function(e){var t=document.createRange(),n=window.getSelection();if(!n.containsNode(e.host,!0))return{range:null,mode:"none"};e.insertBefore(v,e.childNodes[0]);var o=n.containsNode(v);if(v.remove(),o)return{range:null,mode:"outside-before"};e.appendChild(v);var i=n.containsNode(v);if(v.remove(),i)return{range:null,mode:"outside-after"};var r=function(){return n.toString().length};n.toString();if("Caret"!==n.type&&"Range"!==n.type)throw new TypeError("unexpected type: "+n.type);n.type;var l,a=s(n,e,!0),d=void 0;"Range"===n.type&&(l=s(n,e,!1),d=function(e,t,n){if("Range"===e.type){var o,i=function(){return e.toString().length},r=i();return 1===r&&p&&t===n?(e.extend(t,0),void e.collapseToEnd()):(e.modify("extend","forward","character"),(o=i())>r||m(e,n,!0)?(e.modify("extend","backward","character"),!0):o<r||!e.containsNode(t)?(e.modify("extend","backward","character"),!1):(e.modify("extend","backward","character"),(o=i())>r||m(e,t,!1)?(e.modify("extend","forward","character"),!1):o<r||!e.containsNode(n)?(e.modify("extend","forward","character"),!0):void 0))}}(n,a,l));if("Caret"===n.type){n.extend(a,0);var u=r();return n.collapseToEnd(),t.setStart(a,u),t.setEnd(a,u),{range:t,mode:"caret"}}if(void 0===d){if("Range"!==n.type)throw new TypeError("unexpected type: "+n.type);return t.setStart(a,0),t.setEnd(l,l.length),{range:t,mode:"all"}}var c,f,b=r(),h=l.length-function(e){if(e.nodeType!==Node.TEXT_NODE)return 0;var t=/\s*$/.exec(e.textContent)[0].length;return t?t-1:0}(l);d?(n.extend(a,0),c=r()+g(a),n.extend(l,h),f=h-(r()-b),n.extend(l,f)):(n.extend(l,h),f=h-r(),n.extend(a,0),c=r()-b+g(a),n.extend(a,c));return t.setStart(a,c),t.setEnd(l,f),{mode:d?"right":"left",range:t}}(e),r=i.range&&i.range.toString()||null;return null!==r&&r!==o&&r.replace(/\s/g,"")!==o.replace(/\s/g,"")&&(console.warn("invalid range, initial text:",o),console.warn("vs",r,i.mode,i.range)),h.set(e,i.range),window.setTimeout(function(){h.delete(e)},0),i.range}var v=document.createTextNode("");function S(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n  font-family: \'Noto Serif\', serif;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.button-wrapper {\n  background-color: white;\n  position: absolute;\n  display: block;\n  justify-content: space-evenly;\n  @apply --editable-outline-button-wrapper;\n}\n@media (max-width: 1000px) {\n  .button-wrapper {\n    position: relative;\n    @apply --editable-outline-button-wrapper-mobile;\n  }\n}\nbutton {\n  height: 32px;\n  font-size: 10px;\n  margin: 0;\n  padding: 0 8px;\n}\n\n#outline {\n  padding-top: 44px;\n  margin: 0;\n}\nul, ol {\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 32px;\n  @apply --editable-outline-button-list;\n}\nli {\n  font-size: 16px;\n  line-height: 32px;\n  padding: 4px;\n  @apply --editable-outline-button-list-item;\n}\n\nli:focus,\nli:active,\nli:hover {\n  background-color: #EEEEEE;\n  outline: 1px solid #CCCCCC;\n  @apply --editable-outline-button-list-item-active;\n}\n\niron-icon {\n  pointer-events: none;\n}</style>\n<div class="button-wrapper">\n<button on-click="buttonEvents" id="down">\n  <iron-icon icon="icons:arrow-downward"></iron-icon> Move down\n</button>\n<button on-click="buttonEvents" id="up">\n  <iron-icon icon="icons:arrow-upward"></iron-icon> Move up\n</button>\n<button on-click="buttonEvents" id="outdent">\n  <iron-icon icon="editor:format-indent-decrease"></iron-icon> Outdent\n</button>\n<button on-click="buttonEvents" id="indent">\n  <iron-icon icon="editor:format-indent-increase"></iron-icon> Indent\n</button>\n<button on-click="buttonEvents" id="duplicate">\n  <iron-icon icon="icons:content-copy"></iron-icon> Duplicate\n</button>\n</div>\n<ul id="outline" contenteditable$="[[editMode]]">\n  <li contenteditable="true"></li>\n</ul>\n\n<iron-a11y-keys target="[[__outlineNode]]" keys="shift+tab" on-keys-pressed="_tabBackKeyPressed"\n  stop-keyboard-event-propagation></iron-a11y-keys>\n<iron-a11y-keys target="[[__outlineNode]]" keys="tab" on-keys-pressed="_tabKeyPressed"\n  stop-keyboard-event-propagation></iron-a11y-keys>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return S=function(){return n},n}var E=function(e){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a(this,r(o).call(this))).polyfillSafe=e.__computePolyfillSafe(),window.JSONOutlineSchema.requestAvailability(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,t.PolymerElement),i(o,null,[{key:"template",get:function(){return t.html(S())}},{key:"properties",get:function(){return{items:{name:"items",type:"Array",value:[],notify:!0},editMode:{name:"editMode",type:"Boolean",notify:!0,observer:"_editModeChanged"},__outlineNode:{name:"__outlineNode",type:"Object"}}}}]),i(o,[{key:"connectedCallback",value:function(){d(r(o.prototype),"connectedCallback",this).call(this),this.__outlineNode=this.$.outline,this._observer=new MutationObserver(this._observer.bind(this)),this._observer.observe(this.__outlineNode,{childList:!0,subtree:!0})}},{key:"_observer",value:function(e){var t,n=this;for(var o in e){var i=e[o];if(i.removedNodes.length>0&&this.__outdent){for(var r in i.removedNodes)t&&i.removedNodes[r].tagName&&"LI"===i.removedNodes[r].tagName&&null!==i.removedNodes[r].getAttribute("data-jos-id")?(t.setAttribute("data-jos-id",i.removedNodes[r].getAttribute("data-jos-id")),null!==i.removedNodes[r].getAttribute("data-jos-location")&&t.setAttribute("data-jos-location",i.removedNodes[r].getAttribute("data-jos-location")),t=null):"UL"===i.removedNodes[r].tagName&&i.removedNodes[r].firstChild&&"LI"===i.removedNodes[r].firstChild.tagName&&null!==i.removedNodes[r].firstChild.getAttribute("data-jos-id")&&(t.setAttribute("data-jos-id",i.removedNodes[r].firstChild.getAttribute("data-jos-id")),null!==i.removedNodes[r].firstChild.getAttribute("data-jos-location")&&t.setAttribute("data-jos-location",i.removedNodes[r].firstChild.getAttribute("data-jos-location")),t=null);this.$.outline.firstChild||this.$.outline.appendChild(document.createElement("li"))}if(i.addedNodes.length>0)if(this.__outdent)for(var l in i.addedNodes)i.addedNodes[l].tagName&&"LI"===i.addedNodes[l].tagName&&(t=i.addedNodes[l]);else if(!this.__blockScrub)for(var a in i.addedNodes)i.addedNodes[a].tagName&&window.JSONOutlineSchema.requestAvailability().scrubElementJOSData(i.addedNodes[a])}setTimeout(function(){n.__blockScrub=!1,n.__outdent=!1,n.__indent=!1},100)}},{key:"disconnectedCallback",value:function(){d(r(o.prototype),"disconnectedCallback",this).call(this)}},{key:"_editModeChanged",value:function(e,t){n(e)}},{key:"buttonEvents",value:function(e){switch(e.target.id){case"indent":this._indent();break;case"outdent":this._outdent();break;case"up":this._move("up");break;case"down":this._move("down");break;case"duplicate":this._duplicate()}}},{key:"_duplicate",value:function(){try{var e=this.getDeepRange();if("undefined"===n(e.commonAncestorContainer))return;var t=e.commonAncestorContainer;if(null!==t&&"undefined"!==n(t)&&"undefined"!==n(t.tagName)||(t=t.parentNode),t)if(null!==t.nextElementSibling&&"UL"===t.nextElementSibling.tagName){var o=t.nextElementSibling.cloneNode(!0);t.parentNode.insertBefore(o,t.nextElementSibling.nextElementSibling);var i=t.cloneNode(!0);t.parentNode.insertBefore(i,t.nextElementSibling.nextElementSibling)}else{var r=t.cloneNode(!0);t.parentNode.insertBefore(r,t.nextElementSibling)}}catch(e){console.log(e)}}},{key:"_move",value:function(e){try{var t=this.getDeepRange();if("undefined"===n(t.commonAncestorContainer))return;var o=t.commonAncestorContainer;null!==o&&"undefined"!==n(o)&&"undefined"!==n(o.tagName)||(o=o.parentNode);for(var i=o,r=!1;!r&&i.parentNode;)"outline"===i.id&&(r=!0),i=i.parentNode;r&&o&&("up"===e?null!==o.previousElementSibling&&(o.nextElementSibling&&"UL"===o.nextElementSibling.tagName?("UL"===o.previousElementSibling.tagName&&(this.__blockScrub=!0,o.parentNode.insertBefore(o.previousElementSibling,o.nextElementSibling.nextElementSibling)),this.__blockScrub=!0,o.parentNode.insertBefore(o.previousElementSibling,o.nextElementSibling.nextElementSibling),o.focus()):("UL"===o.previousElementSibling.tagName&&(this.__blockScrub=!0,o.parentNode.insertBefore(o.previousElementSibling,o.nextElementSibling)),this.__blockScrub=!0,o.parentNode.insertBefore(o.previousElementSibling,o.nextElementSibling),o.focus())):"down"===e&&null!==o.nextElementSibling&&(o.nextElementSibling&&"UL"===o.nextElementSibling.tagName&&null!==o.nextElementSibling.nextElementSibling?("LI"===o.nextElementSibling.nextElementSibling.tagName&&null!==o.nextElementSibling.nextElementSibling.nextElementSibling&&"UL"===o.nextElementSibling.nextElementSibling.nextElementSibling.tagName&&(this.__blockScrub=!0,o.parentNode.insertBefore(o.nextElementSibling.nextElementSibling,o)),this.__blockScrub=!0,o.parentNode.insertBefore(o.nextElementSibling.nextElementSibling,o),o.focus()):"LI"===o.nextElementSibling.tagName&&(null!==o.nextElementSibling.nextElementSibling&&"UL"===o.nextElementSibling.nextElementSibling.tagName&&(this.__blockScrub=!0,o.parentNode.insertBefore(o.nextElementSibling,o)),this.__blockScrub=!0,o.parentNode.insertBefore(o.nextElementSibling,o),o.focus())))}catch(e){console.log(e)}}},{key:"importJsonOutlineSchemaItems",value:function(){for(this.__blockScrub=!0;null!==this.$.outline.firstChild;)this.$.outline.removeChild(this.$.outline.firstChild);0===this.items.length&&this.set("items",window.JSONOutlineSchema.requestAvailability().items);for(var e=window.JSONOutlineSchema.requestAvailability().itemsToNodes(this.items);null!==e.firstChild;)this.__blockScrub=!0,this.$.outline.appendChild(e.firstChild);return e}},{key:"exportJsonOutlineSchemaItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return window.JSONOutlineSchema.requestAvailability().nodesToItems(this.$.outline,e)}},{key:"_tabKeyPressed",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation());try{this._indent()}catch(e){}}},{key:"_indent",value:function(){this.polyfillSafe&&(this.__indent=!0,this.__blockScrub=!0,document.execCommand("indent"))}},{key:"_tabBackKeyPressed",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),e.detail.keyboardEvent&&(e.detail.keyboardEvent.preventDefault(),e.detail.keyboardEvent.stopPropagation(),e.detail.keyboardEvent.stopImmediatePropagation());try{this._outdent()}catch(e){}}},{key:"_outdent",value:function(){this.polyfillSafe&&(this.__outdent=!0,this.__blockScrub=!0,document.execCommand("outdent"))}},{key:"getDeepSelection",value:function(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():y(this.$.outline.parentNode)?y(this.$.outline.parentNode):window.getSelection()}},{key:"getDeepRange",value:function(){var e=this.getDeepSelection();return e.getRangeAt&&e.rangeCount?e.getRangeAt(0):e||void 0}},{key:"__computePolyfillSafe",value:function(){return!(!document.head.createShadowRoot&&!document.head.attachShadow)||(console.log("Shadow DOM missing, certain operations hidden"),!1)}}],[{key:"tag",get:function(){return"editable-outline"}}]),o}();window.customElements.define(E.tag,E),e.EditableOutline=E,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=editable-outline.umd.js.map
