!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/json-editor/json-editor.js"),require("@lrnwebcomponents/code-editor/code-editor.js"),require("@vaadin/vaadin-split-layout/vaadin-split-layout.js"),require("@polymer/paper-button/paper-button.js"),require("@lrnwebcomponents/hax-body/lib/hax-schema-form.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/json-editor/json-editor.js","@lrnwebcomponents/code-editor/code-editor.js","@vaadin/vaadin-split-layout/vaadin-split-layout.js","@polymer/paper-button/paper-button.js","@lrnwebcomponents/hax-body/lib/hax-schema-form.js"],t):t((e=e||self).HaxschemaBuilder={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function c(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\ncode-editor {\n  height: 500px;\n}</style>\n<vaadin-split-layout>\n  <div>\n    <paper-button raised noink on-click="addConfigure">Add to configure</paper-button>\n    <paper-button raised noink on-click="addAdvanced">Add to advanced</paper-button>\n    <code-editor id="code"  on-value-changed="_editorDataChanged" language="json"></code-editor>\n    <json-editor id="json" label="JSON" value="{{haxSchema}}"></json-editor>\n  </div>\n  <div>\n    <hax-schema-form id="form" configure-schema="[[configureSchema]]" advanced-schema="[[advancedSchema]]" value="{{value}}"></hax-schema-form>\n  </div>\n</vaadin-split-layout>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var s=function(e){function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),a(this,o(s).apply(this,arguments))}var u,d,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(s,t.PolymerElement),u=s,l=[{key:"template",get:function(){return t.html(c())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Haxschema builder",description:"dynamically build and visualize HAXschema",icon:"icons:android",color:"green",groups:["Builder"],handles:[],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],advanced:[]}}}},{key:"properties",get:function(){var e={haxSchema:{name:"haxSchema",type:String,notify:!0,observer:"_haxSchemaChanged"},configureSchema:{name:"configureSchema",type:Object,value:{}},advancedSchema:{name:"advancedSchema",type:Object,value:{}},source:{name:"source",type:String},value:{name:"value",type:String}};return i(o(s),"properties",this)&&(e=Object.assign(e,i(o(s),"properties",this))),e}},{key:"tag",get:function(){return"haxschema-builder"}}],(d=[{key:"connectedCallback",value:function(){var e=this;i(o(s.prototype),"connectedCallback",this).call(this),this.source||(this.haxSchema=JSON.stringify(this.HAXWiring.prototypeHaxProperties(),null,2)),this.shadowRoot.querySelector("#form").modeTab="advanced",setTimeout(function(){e.shadowRoot.querySelector("#form").modeTab="configure"},2e3)}},{key:"_haxSchemaChanged",value:function(e){e&&(this.shadowRoot.querySelector("#code").editorValue=e)}},{key:"_editorDataChanged",value:function(e){this.haxSchema=e.detail.value;var t=JSON.parse(this.haxSchema);for(var n in t.settings){var o=this.HAXWiring.getHaxJSONSchema(n,t);this.set(n+"Schema",o)}}},{key:"addAdvanced",value:function(e){var t=JSON.parse(this.haxSchema);t.settings.advanced.push(this.__propPrototype()),this.__refreshSchemas(t)}},{key:"addConfigure",value:function(e){var t=JSON.parse(this.haxSchema);t.settings.configure.push(this.__propPrototype()),this.__refreshSchemas(t)}},{key:"__refreshSchemas",value:function(e){for(var t in e.settings){var n=this.HAXWiring.getHaxJSONSchema(t,e);this.set(t+"Schema",n)}this.haxSchema=JSON.stringify(e)}},{key:"__propPrototype",value:function(){return{property:"title",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"}}}])&&n(u.prototype,d),l&&n(u,l),s}();window.customElements.define(s.tag,s),e.HaxschemaBuilder=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=haxschema-builder.umd.js.map
