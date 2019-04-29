define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/paper-avatar/paper-avatar.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js"],function(_exports,_polymerLegacy,_paperAvatar,_materializecssStyles){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignAvatar=void 0;function _templateObject_57f465a06a8511e9b0b34778f864c256(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles\">\n      :host {\n        display: block;\n      }\n    </style>\n    <paper-avatar\n      label=\"[[label]]\"\n      src=\"[[src]]\"\n      two-chars=\"[[twoChars]]\"\n      class$=\"[[color]]\"\n      jdenticon=\"[[jdenticon]]\"\n    ></paper-avatar>\n  "]);_templateObject_57f465a06a8511e9b0b34778f864c256=function _templateObject_57f465a06a8511e9b0b34778f864c256(){return data};return data}/**
`lrndesign-avatar`
Visualize a user account eitehr with an image, a label, or as abstract art.

* @demo demo/index.html
*/var LrndesignAvatar=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_57f465a06a8511e9b0b34778f864c256()),is:"lrndesign-avatar",properties:{/**
     * text to use for avatar
     */label:{type:String,value:"lrndesign-avatar"},/**
     * link to an image, optional
     */src:{type:String},/**
     * Mode for presenting 1st two letters
     */twoChars:{type:Boolean,value:!1},/**
     * Materialize CSS color class names
     */color:{type:String,reflectToAttribute:!0},/**
     * Form abstract art from hash of label
     */jdenticon:{type:Boolean,value:!1}}});_exports.LrndesignAvatar=LrndesignAvatar});