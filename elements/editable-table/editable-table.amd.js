define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js","./lib/editable-table-behaviors.js","./lib/editable-table-editor.js","./lib/editable-table-display.js"],function(_exports,_polymerLegacy,_paperTooltip,_paperToggleButton,_editableTableBehaviors,_editableTableEditor,_editableTableDisplay){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.EditableTable=void 0;function _templateObject_2262dbd0f9ae11e89eff2dfca9b5cfb0(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for=\"button\" position=\"left\">Edit this table.</paper-tooltip>\n    <template id=\"display\" is=\"dom-if\" if=\"[[!editMode]]\" restamp=\"true\">\n      <editable-table-display\n        accent-color$=\"[[accentColor]]\"\n        bordered$=\"[[bordered]]\"\n        caption$=\"[[caption]]\"\n        column-header$=\"[[columnHeader]]\"\n        dark$=\"[[dark]]\"\n        data$=\"[[data]]\"\n        condensed$=\"[[condensed]]\"\n        filter$=\"[[filter]]\"\n        footer$=\"[[footer]]\"\n        row-header$=\"[[rowHeader]]\"\n        scroll$=\"[[scroll]]\"\n        sort$=\"[[sort]]\"\n        striped$=\"[[striped]]\"\n        summary$=\"[[summary]]\"\n      >\n      </editable-table-display>\n    </template>\n    <template id=\"editor\" is=\"dom-if\" if=\"[[editMode]]\" restamp=\"true\">\n      <editable-table-editor\n        accent-color$=\"[[accentColor]]\"\n        bordered$=\"[[bordered]]\"\n        caption$=\"[[caption]]\"\n        column-header$=\"[[columnHeader]]\"\n        condensed$=\"[[condensed]]\"\n        dark$=\"[[dark]]\"\n        data$=\"[[data]]\"\n        filter$=\"[[filter]]\"\n        footer$=\"[[footer]]\"\n        hide-accent-color$=\"[[hideAccentColor]]\"\n        hide-dark-theme$=\"[[hideDarkTheme]]\"\n        hide-bordered$=\"[[hideBordered]]\"\n        hide-condensed$=\"[[hideCondensed]]\"\n        hide-filter$=\"[[hideFilter]]\"\n        hide-sort$=\"[[hideSort]]\"\n        hide-scroll$=\"[[hideScroll]]\"\n        hide-striped$=\"[[hideStriped]]\"\n        row-header$=\"[[rowHeader]]\"\n        scroll$=\"[[scroll]]\"\n        sort$=\"[[sort]]\"\n        striped$=\"[[striped]]\"\n        summary$=\"[[summary]]\"\n      >\n      </editable-table-editor>\n    </template>\n  "],["\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for=\"button\" position=\"left\">Edit this table.</paper-tooltip>\n    <template id=\"display\" is=\"dom-if\" if=\"[[!editMode]]\" restamp=\"true\">\n      <editable-table-display\n        accent-color\\$=\"[[accentColor]]\"\n        bordered\\$=\"[[bordered]]\"\n        caption\\$=\"[[caption]]\"\n        column-header\\$=\"[[columnHeader]]\"\n        dark\\$=\"[[dark]]\"\n        data\\$=\"[[data]]\"\n        condensed\\$=\"[[condensed]]\"\n        filter\\$=\"[[filter]]\"\n        footer\\$=\"[[footer]]\"\n        row-header\\$=\"[[rowHeader]]\"\n        scroll\\$=\"[[scroll]]\"\n        sort\\$=\"[[sort]]\"\n        striped\\$=\"[[striped]]\"\n        summary\\$=\"[[summary]]\"\n      >\n      </editable-table-display>\n    </template>\n    <template id=\"editor\" is=\"dom-if\" if=\"[[editMode]]\" restamp=\"true\">\n      <editable-table-editor\n        accent-color\\$=\"[[accentColor]]\"\n        bordered\\$=\"[[bordered]]\"\n        caption\\$=\"[[caption]]\"\n        column-header\\$=\"[[columnHeader]]\"\n        condensed\\$=\"[[condensed]]\"\n        dark\\$=\"[[dark]]\"\n        data\\$=\"[[data]]\"\n        filter\\$=\"[[filter]]\"\n        footer\\$=\"[[footer]]\"\n        hide-accent-color\\$=\"[[hideAccentColor]]\"\n        hide-dark-theme\\$=\"[[hideDarkTheme]]\"\n        hide-bordered\\$=\"[[hideBordered]]\"\n        hide-condensed\\$=\"[[hideCondensed]]\"\n        hide-filter\\$=\"[[hideFilter]]\"\n        hide-sort\\$=\"[[hideSort]]\"\n        hide-scroll\\$=\"[[hideScroll]]\"\n        hide-striped\\$=\"[[hideStriped]]\"\n        row-header\\$=\"[[rowHeader]]\"\n        scroll\\$=\"[[scroll]]\"\n        sort\\$=\"[[sort]]\"\n        striped\\$=\"[[striped]]\"\n        summary\\$=\"[[summary]]\"\n      >\n      </editable-table-editor>\n    </template>\n  "]);_templateObject_2262dbd0f9ae11e89eff2dfca9b5cfb0=function _templateObject_2262dbd0f9ae11e89eff2dfca9b5cfb0(){return data};return data}var EditableTable=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_2262dbd0f9ae11e89eff2dfca9b5cfb0()),is:"editable-table",behaviors:[editableTableBehaviors.displayBehaviors,editableTableBehaviors.editBehaviors],properties:{editMode:{type:Boolean,value:!1}},toggleEditMode:function toggleEditMode(edit){var temp;edit=edit!==void 0?edit:!this.editMode;if(edit){this.querySelector("editable-table-display").toggleFilter();this.querySelector("editable-table-display").sortData(!1);temp=this.querySelector("editable-table-display").getData();console.log(temp)}else{temp=this.querySelector("editable-table-editor").getData()}for(prop in temp){if("data"!==prop){this[prop]=temp[prop]}else{this.set("data",temp[prop])}}this.editMode=edit}});_exports.EditableTable=EditableTable});