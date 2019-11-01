!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).JsonOutlineSchema={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,i,n,r,o,a){try{var u=t[o](a),s=u.value}catch(t){return void i(t)}u.done?e(s):Promise.resolve(s).then(n,r)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e,i){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var r=new(Function.bind.apply(t,n));return i&&u(r,i.prototype),r}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e,i){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}var h=function(){function t(){n(this,t),this.id="item-"+this.generateUUID(),this.title="New item",this.location="",this.description="",this.parent="",this.metadata={},this.order=0,this.indent=0}return o(t,[{key:"readLocation",value:function(){return FALSE}},{key:"writeLocation",value:function(t){return FALSE}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}]),t}();window.JSONOutlineSchema=window.JSONOutlineSchema||{},window.JSONOutlineSchema.requestAvailability=function(){return window.JSONOutlineSchema.instance||(window.JSONOutlineSchema.instance=document.createElement("json-outline-schema"),document.body.appendChild(window.JSONOutlineSchema.instance)),window.JSONOutlineSchema.instance};var f=function(t){function r(){var t,e,i,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return n(this,r),e=this,(t=!(i=a(r).call(this))||"object"!=typeof i&&"function"!=typeof i?c(e):i).tag=r.tag,t.template=document.createElement("template"),t.attachShadow({mode:"open"}),o||t.render(),t.__ready=!1,t.file=null,t.id=t.generateUUID(),t.title="New site",t.author="",t.description="",t.license="by-sa",t.metadata={},t.items=[],t.debug=!1,window.JSONOutlineSchema.instance=c(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,l(HTMLElement)),o(r,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n}\n:host([debug]) {\n  font-family: monospace;\n  white-space: pre;\n  margin: 16px 0px;\n}\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"}}],[{key:"properties",get:function(){var t={};return d(a(r),"properties",this)&&(t=Object.assign(t,d(a(r),"properties",this))),t}},{key:"tag",get:function(){return"json-outline-schema"}}]),o(r,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),window.addEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-ready",{bubbles:!0,cancelable:!1,composed:!0,detail:!0});this.dispatchEvent(t),this.__ready=!0}},{key:"_copyAttribute",value:function(t,e){var i=this.shadowRoot.querySelectorAll(e),n=this.getAttribute(t),r=null==n?"removeAttribute":"setAttribute",o=!0,a=!1,u=void 0;try{for(var s,l=i[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){s.value[r](t,n)}}catch(t){a=!0,u=t}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}}},{key:"_setProperty",value:function(t){var e=t.name,i=t.value;this[e]=i}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-unready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}},{key:"clone",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.parse(JSON.stringify(t))}},{key:"newItem",value:function(){return new h}},{key:"addItem",value:function(t){var e=this.validateItem(t);return count=array_push(this.items,e),count}},{key:"validateItem",value:function(t){var i=new h;for(var n in i)"undefined"!==e(t[n])&&(i[n]=t[n]);return i}},{key:"removeItem",value:function(t){for(var e in this.items)if(this.items[e].id==t){var i=this.items[e];return delete this.items[e],i}return!1}},{key:"updateItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.validateItem(t);for(var n in this.items)if(this.items[n].id==i.id)return this.items[n]=i,!e||this.save();return!1}},{key:"load",value:function(){var t,n=(t=regeneratorRuntime.mark(function t(i){var n,r,o,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=9;break}return this.file=i,t.next=4,fetch(i).then(function(t){return t.text()});case 4:for(o in n=t.sent,r=JSON.parse(n))"undefined"!==e(this[o])&&"items"!==o&&(this[o]=r[o]);if(r.items)for(o in r.items)a=r.items[o],(u=new h).id=a.id,u.indent=a.indent,u.location=a.location,u.order=a.order,u.parent=a.parent,u.title=a.title,u.description=a.description,u.metadata=a.metadata,this.items[o]=u;return t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,s,"next",t)}function s(t){i(a,r,o,u,s,"throw",t)}u(void 0)})});return function(t){return n.apply(this,arguments)}}()},{key:"save",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.stringify(t,null,2)}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"_toggleDebug",value:function(t){this.debug=!this.debug,this._triggerDebugPaint(this.debug)}},{key:"_triggerDebugPaint",value:function(t){if(t){var e={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items},i=document.createElement("span");i.innerHTML=JSON.stringify(e,null,2),this.shadowRoot.appendChild(i.cloneNode(!0))}else this.render()}},{key:"attributeChangedCallback",value:function(t,e,i){this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"updateMetadata",value:function(t,e){this.metadata[t]=e,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"getItemValues",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=t?this.validateItem(t):new h,i&&(e.parent=i.id),e}},{key:"getItemSchema",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item",i={$schema:"http://json-schema.org/schema#",title:this.title,type:"object",properties:{}};for(var n in"item"==e?t=new h:(t={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata},"outline"==e&&(t.items=this.items)),t){var r={title:n,type:"string",value:t[n]};switch(n){case"file":case"id":case"title":case"author":case"description":case"license":case"location":case"parent":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0}};break;case"indent":case"order":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0},attributes:{type:"number"}};case"metadata":case"items":r.type="array",r.items={type:"object",properties:{key:{title:"key",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}},value:{title:"value",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}}}};break;default:console.log(n)}i.properties[n]=r}return i}},{key:"itemsToNodes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];0===t.length&&(t=this.items);var e=this.unflattenItems(t);return this.treeToNodes(e,document.createElement("ul"))}},{key:"treeToNodes",value:function(t,e){for(var i in t){var n=document.createElement("li");n.innerText=t[i].title,n.setAttribute("data-jos-id",t[i].id),t[i].location&&n.setAttribute("data-jos-location",t[i].location),e.appendChild(n),t[i].children&&t[i].children.length>0&&e.appendChild(this.treeToNodes(t[i].children,document.createElement("ul")))}return e}},{key:"unflattenItems",value:function(t,e,i){var n=this;i=void 0!==i?i:[],e=void 0!==e?e:{id:null};var r=t.filter(function(t){return t.parent===e.id});return r.length&&(e.id?e.children=r:i=r,r.forEach(function(e){n.unflattenItems(t,e)})),i}},{key:"scrubElementJOSData",value:function(t){for(var e in t.children)t.removeAttribute("data-jos-id"),t.removeAttribute("data-jos-location"),t.children[e].children&&this.scrubElementJOSData(t.children[e])}},{key:"nodesToItems",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.getChildOutline(t);return e&&(this.items=i,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))),i}},{key:"getChildOutline",value:function(t){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.cloneNode(!0),a=[],u={};null!==o.firstChild;){if("undefined"!==e(o.firstChild.tagName)){var s=o.firstChild;if(null!==s.firstChild&&"undefined"!==e(s.firstChild.tagName)){var l=r;"undefined"!==e(u.id)&&(l=u.id),a=a.concat(this.getChildOutline(s,0,n+1,l))}else u=new h,s.getAttribute("data-jos-id")&&(u.id=s.getAttribute("data-jos-id")),s.getAttribute("data-jos-location")?u.location=s.getAttribute("data-jos-location"):u.location="",u.indent=n,u.order=i,i+=1,u.title=s.innerText,u.parent=r,a.push(u)}o.removeChild(o.firstChild)}return a}},{key:"nextPage",value:function(t,e){t.items=t.items.sort(function(t,e){})}},{key:"file",get:function(){return this.getAttribute("file")},set:function(t){this.__ready&&this.setAttribute("file",t)}},{key:"id",get:function(){return this.getAttribute("id")},set:function(t){this.__ready&&this.setAttribute("id",t)}},{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.__ready&&this.setAttribute("title",t)}},{key:"author",get:function(){return this.getAttribute("author")},set:function(t){this.__ready&&this.setAttribute("author",t)}},{key:"description",get:function(){return this.getAttribute("description")},set:function(t){this.__ready&&this.setAttribute("description",t)}},{key:"license",get:function(){return this.getAttribute("license")},set:function(t){this.__ready&&this.setAttribute("license",t)}},{key:"debug",get:function(){return this.getAttribute("debug")},set:function(t){this.__ready&&t?this.setAttribute("debug",t):this.removeAttribute("debug")}}],[{key:"observedAttributes",get:function(){return["file","id","title","author","description","license","debug"]}}]),r}();window.customElements.define(f.tag,f),t.JsonOutlineSchema=f,t.JSONOutlineSchemaItem=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=json-outline-schema.umd.js.map
