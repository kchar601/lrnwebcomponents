!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],t):t((e=e||self).RelativeHeading={},e.polymerElement_js,e.HAXWiring_js)}(this,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n}\n:host([hidden]) {\n  display: none;\n}\n:host h1,\n:host h2,\n:host h3,\n:host h4,\n:host h5,\n:host h6 {\n  \n  @apply --relative-heading-style;\n}\n:host h1 {\n  @apply --relative-heading-h1;\n}\n:host h2 {\n  @apply --relative-heading-h2;\n}\n:host h3 {\n  @apply --relative-heading-h3;\n}\n:host h4 {\n  @apply --relative-heading-h4;\n}\n:host h5 {\n  @apply --relative-heading-h5;\n}\n:host h6 {\n  @apply --relative-heading-h6;\n}</style>\n<h1 aria-live="polite" hidden="[[!__isLevel1]]">[[text]]</h1>\n<h2 aria-live="polite" hidden="[[!__isLevel2]]">[[text]]</h2>\n<h3 aria-live="polite" hidden="[[!__isLevel3]]">[[text]]</h3>\n<h4 aria-live="polite" hidden="[[!__isLevel4]]">[[text]]</h4>\n<h5 aria-live="polite" hidden="[[!__isLevel5]]">[[text]]</h5>\n<h6 aria-live="polite" hidden="[[!__isLevel6]]">[[text]]</h6>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var p=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),l(this,r(p).apply(this,arguments))}var s,c,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,t.PolymerElement),s=p,d=[{key:"template",get:function(){return t.html(u())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Relative heading",description:"outputs the correct heading hierarchy based on parent's heading",icon:"icons:android",color:"green",groups:["Heading"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"parentHeading",description:"",inputMethod:"array",required:!1,icon:"icons:android"},{property:"tag",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return{defaultLevel:{name:"defaultLevel",type:"Number",value:1},id:{name:"id",type:"String",value:null,observer:"_updateChildren"},parentId:{name:"parentId",type:"String",value:null},text:{name:"text",type:"String",value:null},level:{name:"level",type:"Number",reflectToAttribute:!0,computed:"_getLevel(parentId,defaultLevel)",observer:"_updateChildren"},__isLevel1:{name:"__isLevel1",type:"Boolean",computed:"_isLevel(level,1)"},__isLevel2:{name:"__isLevel2",type:"Boolean",computed:"_isLevel(level,2)"},__isLevel3:{name:"__isLevel3",type:"Boolean",computed:"_isLevel(level,3)"},__isLevel4:{name:"__isLevel4",type:"Boolean",computed:"_isLevel(level,4)"},__isLevel5:{name:"__isLevel5",type:"Boolean",computed:"_isLevel(level,5)"},__isLevel6:{name:"__isLevel6",type:"Boolean",computed:"_isLevel(level,6)"}}}},{key:"tag",get:function(){return"relative-heading"}}],(c=[{key:"connectedCallback",value:function(){a(r(p.prototype),"connectedCallback",this).call(this),this.HAXWiring=new n.HAXWiring,this.HAXWiring.setup(p.haxProperties,p.tag,this)}},{key:"_getLevel",value:function(e,t){var n=document.querySelector("#"+e),i=null!==n&&void 0!==n.level?n.level:t-1;return i<6?i+1:6}},{key:"_updateChildren",value:function(){var e=this;document.querySelectorAll('relative-heading[parent-id="'+this.id+'"]').forEach(function(t){t.parentId=null,t.parentId=e.id})}},{key:"_isLevel",value:function(e,t){return e===t}}])&&i(s.prototype,c),d&&i(s,d),p}();window.customElements.define(p.tag,p),e.RelativeHeading=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=relative-heading.umd.js.map
