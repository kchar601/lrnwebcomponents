define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js","./node_modules/@polymer/paper-item/paper-item.js","./node_modules/@polymer/paper-listbox/paper-listbox.js"],function(_exports,_polymerLegacy,_polymerDom,_paperDropdownMenu,_paperItem,_paperListbox){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DropdownSelect=void 0;function _templateObject_8f2107706a8211e99a6c17a28aaa996d(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      paper-listbox ::slotted(paper-item) {\n        display: block;\n        width: calc(100% - 32px);\n        padding: 0 16px;\n        min-height: 32px;\n        vertical-align: text-top;\n        line-height: 32px;\n        @apply --dropdown-select-items;\n      }\n      paper-listbox paper-listbox {\n        @apply --dropdown-listbox;\n      }\n    </style>\n    <paper-dropdown-menu\n      id=\"menu\"\n      allow-outside-scroll$=\"[[allowOutsideScroll]]\"\n      always-float-label$=\"[[alwaysFloatLabel]]\"\n      dynamic-align$=\"[[dynamicAlign]]\"\n      error-message$=\"[[errorMessage]]\"\n      horizontal-align$=\"[[horizontalAlign]]\"\n      label$=\"[[label]]\"\n      no-animations$=\"[[noAnimations]]\"\n      no-label-float$=\"[[noLabelFloat]]\"\n      on-selected-item-changed=\"_getSelectedValue\"\n      placeholder$=\"[[placeholder]]\"\n      restore-focus-on-close$=\"[[restoreFocusOnClose]]\"\n      vertical-align$=\"[[verticalAlign]]\"\n      vertical-offset$=\"[[verticalOffset]]\"\n    >\n      <paper-listbox\n        id=\"listbox\"\n        slot=\"dropdown-content\"\n        class=\"dropdown-content\"\n      >\n        <slot id=\"content\"></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  "],["\n    <style>\n      :host {\n        display: block;\n      }\n      paper-listbox ::slotted(paper-item) {\n        display: block;\n        width: calc(100% - 32px);\n        padding: 0 16px;\n        min-height: 32px;\n        vertical-align: text-top;\n        line-height: 32px;\n        @apply --dropdown-select-items;\n      }\n      paper-listbox paper-listbox {\n        @apply --dropdown-listbox;\n      }\n    </style>\n    <paper-dropdown-menu\n      id=\"menu\"\n      allow-outside-scroll\\$=\"[[allowOutsideScroll]]\"\n      always-float-label\\$=\"[[alwaysFloatLabel]]\"\n      dynamic-align\\$=\"[[dynamicAlign]]\"\n      error-message\\$=\"[[errorMessage]]\"\n      horizontal-align\\$=\"[[horizontalAlign]]\"\n      label\\$=\"[[label]]\"\n      no-animations\\$=\"[[noAnimations]]\"\n      no-label-float\\$=\"[[noLabelFloat]]\"\n      on-selected-item-changed=\"_getSelectedValue\"\n      placeholder\\$=\"[[placeholder]]\"\n      restore-focus-on-close\\$=\"[[restoreFocusOnClose]]\"\n      vertical-align\\$=\"[[verticalAlign]]\"\n      vertical-offset\\$=\"[[verticalOffset]]\"\n    >\n      <paper-listbox\n        id=\"listbox\"\n        slot=\"dropdown-content\"\n        class=\"dropdown-content\"\n      >\n        <slot id=\"content\"></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  "]);_templateObject_8f2107706a8211e99a6c17a28aaa996d=function _templateObject_8f2107706a8211e99a6c17a28aaa996d(){return data};return data}/**
`dropdown-select`
An easy to use, works as expected dropdown menu. Add slotted items like follows:

<dropdown-select
  allow-outside-scroll
  always-float-label
  dynamic-align
  error-message="Required."
  horizontal-align="left"
  label="Select an item." 
  no-animations
  no-label-float
  placeholder="none" 
  restore-focus-on-close 
  vertical-align="bottom" 
  vertical-offset="10">
  <paper-item value="100">100 things</paper-item>
  <paper-item value="1000">Another value</paper-item>
  <paper-item value="10">Value is 10, but you will see this text</paper-item>
</dropdown-select>

* @demo demo/index.html

*/var DropdownSelect=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_8f2107706a8211e99a6c17a28aaa996d()),is:"dropdown-select",listeners:{"paper-dropdown-open":"_onOpen","paper-dropdown-close":"_onClose"},properties:{/**
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */allowOutsideScroll:{type:Boolean,value:!1},/**
     * Set to true to always float the label.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */dynamicAlign:{type:Boolean},/**
     * The error message to display when invalid.
     */errorMessage:{type:String},/**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */horizontalAlign:{type:String,value:"right"},/**
     * The label of the select menu
     */label:{type:String,value:"Select an option."},/**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */noAnimations:{type:Boolean,value:!1},/**
     * Set to true to disable the floating label.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * True if the dropdown is open. Otherwise, false.
     */opened:{type:Boolean,value:!1},/**
     * The placeholder for the dropdown.
     */placeholder:{type:String},/**
     * Whether focus should be restored to the dropdown when the menu closes.
     */restoreFocusOnClose:{type:Boolean,value:!0},/**
     * The last selected item.
     */selectedItem:{type:Object},/**
     * The index of the selected item
     */selectedItemIndex:{type:Number,value:null},/**
     * The label of the selected item
     */selectedItemLabel:{type:String,value:null},/**
     * The default value
     */value:{type:String,value:null,notify:!0,reflectToAttribute:!0,observer:"_valueChanged"},/**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */verticalAlign:{type:String,value:"top"},/**
     * Overrides the vertical offset computed in
     * _computeMenuVerticalOffset.
     */verticalOffset:{type:Number}},/**
   * Get the value of the selected item.
   */_getSelectedValue:function _getSelectedValue(e){if(null!==e.detail.value){this.value=e.detail.value.getAttribute("value");this._setSelectedValues();this.fire("change",{value:this.value});//support for old version
this.fire("dropdown-select-changed",this)}},/**
   * Sets the opened property to true
   */_onOpen:function _onOpen(e){this.opened=!0},/**
   * Sets the opened property to false
   */_onClose:function _onClose(e){this.opened=!1},/**
   * Get the value of the selected item.
   */_setSelectedValues:function _setSelectedValues(){this.selectedItem=this.$.menu.selectedItem;this.selectedItemLabel=this.$.menu.selectedItemLabel;this.selectedItemIndex=this.$.listbox.selected},/**
   * Set the index of the selected item, only on initial setup though
   */attached:function attached(){this._valueChanged(this.value)},/**
   * Notice value has changed and ensure data model is accurate
   */_valueChanged:function _valueChanged(newValue,oldValue){var children=(0,_polymerDom.dom)(this).querySelectorAll("paper-item");if(children!==void 0&&null!==children){for(var i=0;i<children.length;i++){if(this.value===children[i].getAttribute("value")){this.$.listbox.selected=i;this._setSelectedValues()}}}}});_exports.DropdownSelect=DropdownSelect});