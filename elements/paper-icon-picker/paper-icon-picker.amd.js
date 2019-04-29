define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/iron-meta/iron-meta.js","./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/paper-item/paper-item.js","./node_modules/@polymer/paper-styles/color.js","./node_modules/@polymer/paper-listbox/paper-listbox.js","./node_modules/@polymer/paper-menu-button/paper-menu-button.js","./node_modules/@polymer/iron-list/iron-list.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/neon-animation/neon-animation.js","./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js","./lib/paper-icon-picker-icon.js"],function(_exports,_polymerLegacy,_polymerDom,_ironMeta,_ironFlexLayout,_paperIconButton,_paperItem,_color,_paperListbox,_paperMenuButton,_ironList,_ironIcon,_neonAnimation,_ironA11yKeys,_paperTooltip,_ironIconsetSvg,_paperIconPickerIcon){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PaperIconPicker=void 0;function _templateObject_24c040706a8311e981caf7b02cb97eca(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\">\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      .icon {\n        box-sizing: border-box;\n        width: var(--paper-icon-picker-icon-size, 26px);\n        height: var(--paper-icon-picker-icon-size, 26px);\n        color: #888888;\n        display: inline-block;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        font-size: 0;\n        position: absolute;\n      }\n      .icon iron-icon {\n        width: var(--paper-icon-picker-icon-size, 26px);\n        height: var(--paper-icon-picker-icon-size, 26px);\n      }\n\n      /* If we just scale the paper-item when hovering, this will end up\n       * adding scrollbars to the paper-listbox that are hard to get rid of.\n       * An easy workaround is to use an :after pseudo element instead. */\n      .icon:after {\n        @apply --layout-fit;\n        content: \"\";\n        -webkit-transition: -webkit-transform 0.2s;\n        transition: transform 0.2s;\n        z-index: 0;\n      }\n\n      .icon:hover,\n      .icon:focus {\n        -webkit-transform: scale(1.8, 1.8);\n        transform: scale(1.8, 1.8);\n        outline: none;\n        z-index: 1;\n        background-color: #ffffff;\n        border-radius: 0;\n        border: 1px solid #888888;\n        color: orange !important;\n      }\n\n      paper-item {\n        --paper-item: {\n          margin: 0;\n          padding: 0;\n          min-height: 0;\n        }\n\n        --paper-item-focused-before: {\n          opacity: 0;\n        }\n      }\n\n      paper-listbox {\n        margin: 8px;\n        font-size: 0;\n        @apply --layout-vertical;\n        @apply --layout-wrap;\n      }\n      paper-tooltip {\n        z-index: 1;\n      }\n      .icon-group-1 {\n        color: var(--paper-pink-700);\n      }\n      .icon-group-2 {\n        color: var(--google-green-700);\n      }\n      .icon-group-3 {\n        color: var(--google-blue-700);\n      }\n      .icon-group-4 {\n        color: var(--paper-grey-700);\n      }\n      .icon-group-5 {\n        color: var(--paper-pink-700);\n      }\n      .icon-group-6 {\n        color: var(--google-green-700);\n      }\n      .icon-group-7 {\n        color: var(--google-blue-700);\n      }\n      .icon-group-8 {\n        color: var(--paper-grey-700);\n      }\n      .icon-group-9 {\n        color: var(--paper-pink-700);\n      }\n      .icon-group-10 {\n        color: var(--google-green-700);\n      }\n      .icon-group-11 {\n        color: var(--google-blue-700);\n      }\n      .icon-group-12 {\n        color: var(--paper-grey-700);\n      }\n      .icon-group-13 {\n        color: var(--paper-pink-700);\n      }\n      .icon-group-14 {\n        color: var(--google-green-700);\n      }\n      .icon-group-15 {\n        color: var(--google-blue-700);\n      }\n      .icon-group-16 {\n        color: var(--paper-grey-700);\n      }\n      .icon-group-17 {\n        color: var(--paper-pink-700);\n      }\n      .icon-group-18 {\n        color: var(--google-green-700);\n      }\n      .icon-group-19 {\n        color: var(--google-blue-700);\n      }\n    </style>\n    <paper-menu-button\n      id=\"iconpicker\"\n      on-tap=\"_onOpen\"\n      vertical-align=\"[[verticalAlign]]\"\n      horizontal-align=\"[[horizontalAlign]]\"\n      opened=\"{{opened}}\"\n    >\n      <paper-icon-button\n        id=\"iconButton\"\n        icon=\"swatch:perm-media\"\n        class=\"dropdown-trigger\"\n        alt=\"icon picker\"\n        noink$=\"[[noink]]\"\n        slot=\"dropdown-trigger\"\n      ></paper-icon-button>\n      <iron-list\n        grid\n        items=\"[[renderIconList]]\"\n        id=\"container\"\n        slot=\"dropdown-content\"\n      >\n        <template>\n          <paper-item\n            on-tap=\"_onIconTap\"\n            class$=\"icon-group-[[item.index]] icon\"\n            value=\"[[item.icon]]\"\n          >\n            <iron-icon icon=\"[[item.icon]]\" value=\"[[item.icon]]\"></iron-icon>\n          </paper-item>\n        </template>\n      </iron-list>\n    </paper-menu-button>\n    <paper-tooltip for=\"iconpicker\" position=\"bottom\" offset=\"14\">\n      [[iconText]]\n    </paper-tooltip>\n    <iron-a11y-keys\n      target=\"[[iconpicker]]\"\n      keys=\"escape\"\n      on-keys-pressed=\"close\"\n      stop-keyboard-event-propagation\n    ></iron-a11y-keys>\n  "]);_templateObject_24c040706a8311e981caf7b02cb97eca=function _templateObject_24c040706a8311e981caf7b02cb97eca(){return data};return data}/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ /**
This is a simple icon picker element that will allow you to choose one
of the Material Design icons from a list of available swatches.

Example:

    <paper-icon-picker></paper-icon-picker>

    <paper-icon-picker icon="{{selectedIcon}}"></paper-icon-picker>

You can configure the icon palette being used using the `iconList` array and
the `columnCount` property, which specifies how many "generic" icons (i.e. columns
in the picker) you want to display.

    <paper-icon-picker column-count=5 icon-list='["icons:cloud", "icons:face", "icons:work", "icons:pets", "icons:perm-contact-calendar"]'></paper-icon-picker>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-icon-picker-icon-size` | The size of each of the icon boxes | `26px`
`--paper-icon-picker-size` | The size of the icon picker | `24px`

@element paper-icon-picker
* @demo demo/index.html
*/var PaperIconPicker=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_24c040706a8311e981caf7b02cb97eca()),is:"paper-icon-picker",/**
   * Fired when a icon has been selected
   *
   * @event icon-picker-selected
   */properties:{/**
     * opened state
     */opened:{type:Boolean},/**
     * The selected icon, as string (i.e. 'icons:add-box').
     * value.
     */icon:{type:String,notify:!0,observer:"_iconChanged"},/**
     * icon text off of icon
     */iconText:{type:String,computed:"_computedIconText(icon)"},/**
     * The icons to be displayed. By default, these are the Material Design
     * icons.
     */iconList:{type:Array,notify:!0,value:function value(){return[]}},/**
     * Build a list of icons to render based on
     * what has been found.
     */renderIconList:{type:Array,computed:"_computeRenderIconList(iconList)"},/**
     * The number of icons to display in the picker.
     * the Material Design palette has 18 icons
     */columnCount:{type:Number,value:8},/**
     * max rows to display to increase performance of large lists
     * of icons being loaded
     */maxRows:{type:Number,value:6},/**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},/**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */verticalAlign:{type:String,value:"top",reflectToAttribute:!0},/**
     * If true, the icon picker button will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean}},/**
   * on open event
   */_onOpen:function _onOpen(e){var _this=this;setTimeout(function(){try{_this.shadowRoot.querySelector("paper-item").focus()}catch(error){}},500)},/**
   * Close list.
   */close:function close(){this.opened=!1},/**
   * List that we will output to the screen
   */_computeRenderIconList:function _computeRenderIconList(list){var renderList=[],item={};for(var i in list){item={};if(babelHelpers.typeof(list[i].icon)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){item.icon=list[i]}else{item.icon=list[i].icon}if(babelHelpers.typeof(list[i].index)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){item.index=0}else{item.index=list[i].index}renderList.push(item)}return renderList},/**
   * Icon text from icon selected
   */_computedIconText:function _computedIconText(icon){if(""==icon){return"Select an icon"}return icon},created:function created(){// Note: we won't actually render these icon boxes unless the menu is
// actually tapped.
this._renderedIcons=!1},/**
   * Attached life cycle
   */attached:function attached(){// need to access iconset imperatively now
var iconSets=new _ironMeta.IronMeta({type:"iconset"});if(0===this.iconList.length&&babelHelpers.typeof(iconSets)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&iconSets.list&&iconSets.list.length){var iconList=[],index=0;iconSets.list.forEach(function(item){index++;item.getIconNames().forEach(function(icon){iconList.push({icon:icon,index:index})})});this.set("iconList",iconList)}// Fit the icon boxes in columns. We first need to get the width of
// a icon box (which is customizable), and then change the box's
// width to fit all the columns.
var sizeOfAIconDiv;if(window.ShadyCSS){sizeOfAIconDiv=ShadyCSS.getComputedStyleValue(this,"--paper-icon-picker-icon-size")}else{sizeOfAIconDiv=getComputedStyle(this).getPropertyValue("--paper-icon-picker-icon-size")}if(!sizeOfAIconDiv||""==sizeOfAIconDiv){// Default value case
sizeOfAIconDiv=26}else{sizeOfAIconDiv=sizeOfAIconDiv.replace("px","")}var rowCount=Math.round(this.iconList.length/this.columnCount)+1;// ensure that we don't go beyond 100 shown if this is an insane list
if(rowCount>this.maxRows){rowCount=this.maxRows}this.$.container.style.height=rowCount*sizeOfAIconDiv+"px";this.$.container.style.width=this.columnCount*sizeOfAIconDiv+"px"},_addOverflowClass:function _addOverflowClass(){this.$.container.toggleClass("opened",!0)},_removeOverflowClass:function _removeOverflowClass(){this.$.container.toggleClass("opened",!1)},_onIconTap:function _onIconTap(e){this.icon=e.target.value;this.fire("icon-picker-selected",{icon:this.icon});this.$.container.fire("iron-select",this.icon);this.close()},_iconChanged:function _iconChanged(){if(this.icon){this.$.iconButton.icon=this.icon}else{this.$.iconButton.icon="swatch:perm-media"}}});_exports.PaperIconPicker=PaperIconPicker});