define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/lrndesign-panelcard/lrndesign-panelcard.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerLegacy,_lrndesignPanelcard,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnAside=void 0;function _templateObject_499ad630f9ae11e8a272f598174503c0(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        padding: 8px;\n      }\n      :host([sticky]) {\n        top: 0;\n        position: sticky;\n      }\n      :host([direction=\"left\"]) {\n        float: left;\n        max-width: 480px;\n      }\n      :host([direction=\"right\"]) {\n        float: right;\n        max-width: 480px;\n      }\n    </style>\n    <aside>\n      <lrndesign-panelcard title=\"[[title]]\">\n        <slot></slot>\n      </lrndesign-panelcard>\n    </aside>\n  "]);_templateObject_499ad630f9ae11e8a272f598174503c0=function _templateObject_499ad630f9ae11e8a272f598174503c0(){return data};return data}var LrnAside=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_499ad630f9ae11e8a272f598174503c0()),is:"lrn-aside",behaviors:[HAXBehaviors.PropertiesBehaviors],properties:{title:{type:String,value:"Related content"},sticky:{type:Boolean,value:!1,reflectToAttribute:!0},direction:{type:String,value:"",reflectToAttribute:!0}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sticky note",description:"A sticky note to present some basic info offset on the page.",icon:"av:note",color:"yellow",groups:["Content"],handles:[{type:"text",title:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Enter title for sticky note",inputMethod:"textfield",required:!0}],configure:[{property:"title",title:"Title",description:"Enter title for sticky note.",inputMethod:"textfield",required:!0},{slot:"",title:"Content",description:"Content of the sticky note",inputMethod:"code-editor",required:!0},{property:"sticky",title:"Stick to page on scroll",description:"Appear sticky when the user scrolls past it",inputMethod:"boolean"},{property:"direction",title:"Direction to hang",description:"Location of the sticky note to hang",inputMethod:"select",options:{"":"none",right:"Right",left:"Left"}}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrnAside=LrnAside});