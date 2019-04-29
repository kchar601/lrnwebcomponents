define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js","./lib/editable-table-behaviors.js","./lib/editable-table-editor.js","./lib/editable-table-display.js"],function(_exports,_polymerLegacy,_paperTooltip,_paperToggleButton,_editableTableBehaviors,_editableTableEditor,_editableTableDisplay){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.EditableTable=void 0;function _templateObject_dc344b006a8511e9bab91b9456e3b1c0(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for=\"button\" position=\"left\">Edit this table.</paper-tooltip>\n    <template id=\"display\" is=\"dom-if\" if=\"[[!editMode]]\" restamp=\"true\">\n      <editable-table-display\n        accent-color$=\"[[accentColor]]\"\n        bordered$=\"[[bordered]]\"\n        caption$=\"[[caption]]\"\n        column-header$=\"[[columnHeader]]\"\n        dark$=\"[[dark]]\"\n        data$=\"[[data]]\"\n        condensed$=\"[[condensed]]\"\n        filter$=\"[[filter]]\"\n        footer$=\"[[footer]]\"\n        row-header$=\"[[rowHeader]]\"\n        scroll$=\"[[scroll]]\"\n        sort$=\"[[sort]]\"\n        striped$=\"[[striped]]\"\n        summary$=\"[[summary]]\"\n      >\n      </editable-table-display>\n    </template>\n    <template id=\"editor\" is=\"dom-if\" if=\"[[editMode]]\" restamp=\"true\">\n      <editable-table-editor\n        accent-color$=\"[[accentColor]]\"\n        bordered$=\"[[bordered]]\"\n        caption$=\"[[caption]]\"\n        column-header$=\"[[columnHeader]]\"\n        condensed$=\"[[condensed]]\"\n        dark$=\"[[dark]]\"\n        data$=\"[[data]]\"\n        filter$=\"[[filter]]\"\n        footer$=\"[[footer]]\"\n        hide-accent-color$=\"[[hideAccentColor]]\"\n        hide-dark-theme$=\"[[hideDarkTheme]]\"\n        hide-bordered$=\"[[hideBordered]]\"\n        hide-condensed$=\"[[hideCondensed]]\"\n        hide-filter$=\"[[hideFilter]]\"\n        hide-sort$=\"[[hideSort]]\"\n        hide-scroll$=\"[[hideScroll]]\"\n        hide-striped$=\"[[hideStriped]]\"\n        row-header$=\"[[rowHeader]]\"\n        scroll$=\"[[scroll]]\"\n        sort$=\"[[sort]]\"\n        striped$=\"[[striped]]\"\n        summary$=\"[[summary]]\"\n      >\n      </editable-table-editor>\n    </template>\n  "],["\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for=\"button\" position=\"left\">Edit this table.</paper-tooltip>\n    <template id=\"display\" is=\"dom-if\" if=\"[[!editMode]]\" restamp=\"true\">\n      <editable-table-display\n        accent-color\\$=\"[[accentColor]]\"\n        bordered\\$=\"[[bordered]]\"\n        caption\\$=\"[[caption]]\"\n        column-header\\$=\"[[columnHeader]]\"\n        dark\\$=\"[[dark]]\"\n        data\\$=\"[[data]]\"\n        condensed\\$=\"[[condensed]]\"\n        filter\\$=\"[[filter]]\"\n        footer\\$=\"[[footer]]\"\n        row-header\\$=\"[[rowHeader]]\"\n        scroll\\$=\"[[scroll]]\"\n        sort\\$=\"[[sort]]\"\n        striped\\$=\"[[striped]]\"\n        summary\\$=\"[[summary]]\"\n      >\n      </editable-table-display>\n    </template>\n    <template id=\"editor\" is=\"dom-if\" if=\"[[editMode]]\" restamp=\"true\">\n      <editable-table-editor\n        accent-color\\$=\"[[accentColor]]\"\n        bordered\\$=\"[[bordered]]\"\n        caption\\$=\"[[caption]]\"\n        column-header\\$=\"[[columnHeader]]\"\n        condensed\\$=\"[[condensed]]\"\n        dark\\$=\"[[dark]]\"\n        data\\$=\"[[data]]\"\n        filter\\$=\"[[filter]]\"\n        footer\\$=\"[[footer]]\"\n        hide-accent-color\\$=\"[[hideAccentColor]]\"\n        hide-dark-theme\\$=\"[[hideDarkTheme]]\"\n        hide-bordered\\$=\"[[hideBordered]]\"\n        hide-condensed\\$=\"[[hideCondensed]]\"\n        hide-filter\\$=\"[[hideFilter]]\"\n        hide-sort\\$=\"[[hideSort]]\"\n        hide-scroll\\$=\"[[hideScroll]]\"\n        hide-striped\\$=\"[[hideStriped]]\"\n        row-header\\$=\"[[rowHeader]]\"\n        scroll\\$=\"[[scroll]]\"\n        sort\\$=\"[[sort]]\"\n        striped\\$=\"[[striped]]\"\n        summary\\$=\"[[summary]]\"\n      >\n      </editable-table-editor>\n    </template>\n  "]);_templateObject_dc344b006a8511e9bab91b9456e3b1c0=function _templateObject_dc344b006a8511e9bab91b9456e3b1c0(){return data};return data}/**
`editable-table`

An editor interface for tables that toggles between 
view mode (editable-table-display.html) and 
edit mode (editable-table-editor.html). 
(See editable-table-behaviors.html for more information.)

* @demo demo/index.html

@microcopy - the mental model for this element

<editable-table 
  accent-color="indigo"     //Optional accent color for column headers and border. Default is none. (See https://lrnwebcomponents.github.io/simple-colors/components/simple-colors/)
  bordered                  //Adds borders to table. Default is no border.
  caption="..."             //The caption or title for the table.
  column-header             //Does the table use the first row as a column-header? Default is false.
  condensed                 //Condense the padding above and below the table? Default is false.
  dark                      //Optional dark theme. Default is light theme. (See https://lrnwebcomponents.github.io/simple-colors/components/simple-colors/)
  data='[                   //Table data as an array. For example:
    [ ["..."], ["..."] ],     //This line represents a row with two columns
    [ ["..."], ["..."] ],     //This line represents another row with two columns
    [ ["..."], ["..."] ]      //This line represents a third row with two columns
  ]'
  edit-mode                 //Is the editor in edit mode? Default is false which places the table in display mode. 
  filter                    //Allow table to toggle filtering? When a cell is toggled, only rows that have the same value as that cell will be shown. Default is no filter.
  footer                    //Does the table use the last row as a footer? Default is false.
  hide-accent-color           //Hide the accent color dropdown menu? Default is false which enables the menu which changes the accent-color property.
  hide-bordered              //Hide the bordered toggle? Default is false so that a toggle button to control the bordered property.
  hide-condensed             //Hide the condensed toggle? Default is false so that a toggle button to control the condensed property.
  hide-dark-theme             //Hide the dark theme toggle? Default is false so that a toggle button to control the dark property.
  hide-filter                //Hide the filter toggle? Default is false so that a toggle button to control the filter property.
  hide-sort                  //Hide the sort toggle? Default is false so that a toggle button to control the sort property.
  hide-scroll                //Hide the scroll toggle? Default is false so that a toggle button to control the scroll property.
  hide-striped               //Hide the striped toggle? Default is false so that a toggle button to control the striped property.
  row-header                //Does the table use the first column as a row header? Default is false.
  scroll                    //Does the table use scrolling to fit when it is too wide?  Default is false: a responsive layout where only two columns are shown and a dropdown menu controls which column to display.
  sort                      //Does the table allow sorting by column where column headers become sort buttons? Default is false.
  striped                   //Does the table have alternating stipes of shading for its body rows? Default is false.
  summary="...">            //An accessible description of the table, what each row reporesents, and what each column represents.
</editable-table>
*/var EditableTable=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_dc344b006a8511e9bab91b9456e3b1c0()),is:"editable-table",behaviors:[editableTableBehaviors.displayBehaviors,editableTableBehaviors.editBehaviors],properties:{/**
     * Is the table in edit-mode? Default is false (display mode).
     */editMode:{type:Boolean,value:!1}},/**
   * Toggles between edit-mode and display mode.
   */toggleEditMode:function toggleEditMode(edit){var temp;edit=edit!==void 0?edit:!this.editMode;if(edit){this.querySelector("editable-table-display").toggleFilter();this.querySelector("editable-table-display").sortData(!1);temp=this.querySelector("editable-table-display").getData();console.log(temp)}else{temp=this.querySelector("editable-table-editor").getData()}for(prop in temp){if("data"!==prop){this[prop]=temp[prop]}else{this.set("data",temp[prop])}}this.editMode=edit}});_exports.EditableTable=EditableTable});