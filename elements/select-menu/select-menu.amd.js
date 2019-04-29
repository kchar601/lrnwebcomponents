define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js","./node_modules/@polymer/paper-item/paper-item.js","./node_modules/@polymer/paper-listbox/paper-listbox.js"],function(_exports,_polymerLegacy,_paperDropdownMenu,_paperItem,_paperListbox){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SelectMenu=void 0;function _templateObject_48ba4de06a8311e9b572a1132872e8dd(){var data=babelHelpers.taggedTemplateLiteral(["\n    <custom-style>\n      <style is=\"custom-style\">\n        paper-dropdown-menu,\n        paper-listbox {\n          width: 250px;\n        }\n        paper-dropdown-menu {\n          height: 200px;\n          margin: auto;\n          display: block;\n        }\n      </style>\n    </custom-style>\n    <paper-dropdown-menu\n      id=\"menu\"\n      label$=\"[[label]]\"\n      on-tap=\"_menubuttonTap\"\n      on-selected-item-changed=\"_setSelectedValue\"\n    >\n      <paper-listbox\n        id=\"listbox\"\n        slot=\"dropdown-content\"\n        selected=\"{{selectedIndex}}\"\n      >\n        <slot></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  "],["\n    <custom-style>\n      <style is=\"custom-style\">\n        paper-dropdown-menu,\n        paper-listbox {\n          width: 250px;\n        }\n        paper-dropdown-menu {\n          height: 200px;\n          margin: auto;\n          display: block;\n        }\n      </style>\n    </custom-style>\n    <paper-dropdown-menu\n      id=\"menu\"\n      label\\$=\"[[label]]\"\n      on-tap=\"_menubuttonTap\"\n      on-selected-item-changed=\"_setSelectedValue\"\n    >\n      <paper-listbox\n        id=\"listbox\"\n        slot=\"dropdown-content\"\n        selected=\"{{selectedIndex}}\"\n      >\n        <slot></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  "]);_templateObject_48ba4de06a8311e9b572a1132872e8dd=function _templateObject_48ba4de06a8311e9b572a1132872e8dd(){return data};return data}/**
 * `select-menu`
 * accepts an array of values and human-readable text and creates a paper-dropdown-menu, provides the value fo the selected item
 *
 * @customElement
 * @polymer
 * @polymerLegacy
 * @demo demo/index.html
 */var SelectMenu=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_48ba4de06a8311e9b572a1132872e8dd()),is:"select-menu",properties:{/**
     * The label of the select menu
     */label:{type:String,value:"Select an option."},/**
     * The default value
     */value:{type:String,value:null},/**
     * The index of the selected item
     */selectedIndex:{type:Number,reflectToAttribute:!0,notify:!0,computed:"_getSelectedIndex()"}},/**
   * Get the value of the selected item.
   */_setSelectedValue:function _setSelectedValue(e){if(null!==e.detail.value){var val=e.detail.value.getAttribute("value");this.setAttribute("value",val);this.fire("change",{value:val})}},/**
   * Get the index of the default value.
   */_getSelectedIndex:function _getSelectedIndex(){this.__items=this.getElementsByTagName("paper-item");for(var i=0;i<this.__items.length;i++){console.log(this.value,this.__items[i],this.__items[i].getAttribute("value"));if(this.value==this.__items[i].getAttribute("value")){return i}}return null}});_exports.SelectMenu=SelectMenu});