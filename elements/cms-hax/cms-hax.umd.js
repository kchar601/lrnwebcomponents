!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/cms-hax/lib/cms-entity.js"),require("@lrnwebcomponents/cms-hax/lib/cms-views.js"),require("@lrnwebcomponents/cms-hax/lib/cms-block.js"),require("@lrnwebcomponents/cms-hax/lib/cms-token.js"),require("lit-element/lit-element.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@lrnwebcomponents/h-a-x/h-a-x.js"),require("@lrnwebcomponents/hax-body/lib/hax-store.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/cms-hax/lib/cms-entity.js","@lrnwebcomponents/cms-hax/lib/cms-views.js","@lrnwebcomponents/cms-hax/lib/cms-block.js","@lrnwebcomponents/cms-hax/lib/cms-token.js","lit-element/lit-element.js","@polymer/iron-ajax/iron-ajax.js","@lrnwebcomponents/h-a-x/h-a-x.js","@lrnwebcomponents/hax-body/lib/hax-store.js"],t):t((e=e||self).CmsHax={},null,null,null,null,e.litElement_js,null,null,e.haxStore_js)}(this,function(e,t,n,o,r,i,a,s,c){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o,r,i=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o=this,!(r=n)||"object"!=typeof r&&"function"!=typeof r?y(o):r}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function x(){var e=m(["\n        :host {\n          display: block;\n          font-size: 16px;\n          box-sizing: content-box;\n        }\n      "]);return x=function(){return e},e}function _(){var e=m(['\n      <iron-ajax\n        id="pageupdateajax"\n        url="','"\n        method="','"\n        content-type="application/json"\n        handle-as="json"\n        @response="','"\n      ></iron-ajax>\n      <h-a-x app-store="','"></h-a-x>\n    ']);return _=function(){return e},e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,i.LitElement);var t=h(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this)).ready=!1,window.addEventListener("hax-store-ready",e._storeReady.bind(y(e)),{once:!0,passive:!0}),window.addEventListener("hax-store-app-store-loaded",e._appstoreLoaded.bind(y(e)),{once:!0,passive:!0}),window.addEventListener("hax-save",e._saveFired.bind(y(e))),e.__lock=!1,e.endPoint=null,e.openDefault=!1,e.hidePanelOps=!1,e.hidePreferencesButton=!1,e.elementAlign="right",e.method="PUT",e.syncBody=!1,e.bodyValue="",e.hideMessage=!1,e.__imported=!1,setTimeout(function(){},0),e}return d(n,[{key:"render",value:function(){return i.html(_(),this.endPoint,this.method,this._handleUpdateResponse,this.__appStore)}},{key:"decodeHTMLEntities",value:function(e){for(var t=[["amp","&"],["apos","'"],["#x27","'"],["#x2F","/"],["#39","'"],["#47","/"],["lt","<"],["gt",">"],["nbsp"," "],["quot",'"']],n=0,o=t.length;n<o;++n)e=e.replace(new RegExp("&"+t[n][0]+";","g"),t[n][1]);return e}},{key:"_activeHaxBodyUpdated",value:function(e){if(!this.__imported){this.__imported=!0;var t=this.querySelector("template");null!=t&&c.HAXStore.activeHaxBody.importContent(t.innerHTML)}}},{key:"_computeRedirectOnSave",value:function(e){return"undefined"!==l(e)}},{key:"_noticeTagChanges",value:function(e,t,n,o,r,i){if(c.HAXStore.ready){if(t){var a=c.HAXStore.validTagList;c.HAXStore.validTagList=[].concat(v(a),v(t))}setTimeout(function(){c.HAXStore.haxTray.hidePanelOps=n,c.HAXStore.haxTray.offsetMargin=o,c.HAXStore.haxTray.hidePreferencesButton=r,c.HAXStore.haxTray.elementAlign=i},0),e&&(c.HAXStore.editMode=e)}}},{key:"_storeReady",value:function(e){var t=this;setTimeout(function(){t._noticeTagChanges(t.openDefault,t.allowedTags,t.hidePanelOps,t.offsetMargin,t.hidePreferencesButton,t.elementAlign),t.__applyMO(),window.removeEventListener("hax-store-ready",t._storeReady.bind(t),{once:!0,passive:!0})},0)}},{key:"_appstoreLoaded",value:function(e){var t=this;setTimeout(function(){t.ready=!0,window.removeEventListener("hax-store-app-store-loaded",t._appstoreLoaded.bind(t),{once:!0,passive:!0})},0)}}],[{key:"styles",get:function(){return[i.css(x())]}},{key:"tag",get:function(){return"cms-hax"}},{key:"properties",get:function(){return{ready:{type:Boolean},openDefault:{type:Boolean,reflect:!0,attribute:"open-default"},hidePanelOps:{type:Boolean,attribute:"hide-panel-ops"},offsetMargin:{type:String,reflect:!0,attribute:"offset-margin"},hidePreferencesButton:{type:Boolean,attribute:"hide-preferences-button"},elementAlign:{type:String,attribute:"element-align"},allowedTags:{type:Array,attribute:"allowed-tags"},endPoint:{type:String,attribute:"end-point"},method:{type:String},appStoreConnection:{type:String,attribute:"app-store-connection"},__appStore:{type:String},syncBody:{type:Boolean,attribute:"sync-body"},bodyValue:{type:String,attribute:"body-value"},hideMessage:{type:Boolean,attribute:"hide-message"},redirectLocation:{type:String,attribute:"redirect-location"},redirectOnSave:{type:Boolean,attribute:"redirect-on-save"},__imported:{type:Boolean}}}}]),d(n,[{key:"_makeAppStore",value:function(e){this.__appStore=this.decodeHTMLEntities(e)}},{key:"updated",value:function(e){var t=this;b(p(n.prototype),"updated",this)&&b(p(n.prototype),"updated",this).call(this,e),e.forEach(function(e,n){"redirectLocation"==n&&(t.redirectOnSave=t._computeRedirectOnSave(t[n])),"ready"==n&&t.ready&&t.shadowRoot&&t._activeHaxBodyUpdated(t.ready),"appStoreConnection"==n&&t._makeAppStore(t[n]),["openDefault","allowedTags","hidePanelOps","offsetMargin","hidePreferencesButton","elementAlign"].includes(n)&&t._noticeTagChanges(t.openDefault,t.allowedTags,t.hidePanelOps,t.offsetMargin,t.hidePreferencesButton,t.elementAlign)})}},{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),b(p(n.prototype),"disconnectedCallback",this).call(this)}},{key:"__applyMO",value:function(){var e=this;!this._observer&&this.syncBody&&c.HAXStore.activeHaxBody&&(this._observer=new MutationObserver(function(t){e.__lock||(e.__lock=!0,e.dispatchEvent(new CustomEvent("hax-body-content-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:c.HAXStore.activeHaxBody.haxToContent()})),setTimeout(function(){e.__lock=!1},100))}),this._observer.observe(c.HAXStore.activeHaxBody,{childList:!0,subtree:!0}))}},{key:"_saveFired",value:function(e){this.endPoint&&(c.HAXStore.skipExitTrap=!0,c.HAXStore.editMode&&(c.HAXStore.editMode=!1),this.shadowRoot.querySelector("#pageupdateajax").body=c.HAXStore.activeHaxBody.haxToContent(),this.shadowRoot.querySelector("#pageupdateajax").generateRequest())}},{key:"_handleUpdateResponse",value:function(e){var t=this;if(!this.hideMessage){var n=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{text:"Saved!",duration:3e3}});window.dispatchEvent(n),this.dispatchEvent(new CustomEvent("cms-hax-saved",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),this.redirectOnSave&&setTimeout(function(){window.location=t.redirectLocation},500)}}}]),n}();window.customElements.define(w.tag,w),e.CmsHax=w,Object.defineProperty(e,"__esModule",{value:!0})});
