define(["./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"],function(_polymerElement,_ironFlexLayout){"use strict";function _templateObject_80d31b50f9ac11e8bf00715a645b92ed(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"iron-flex-layout\">\n    /**\n     * Normalizes iron-icon and lrn-icon.\n     */\n    lrn-icon,\n    iron-icon {\n      --layout-inline: {\n        display: inline-flex;\n      }\n    }\n    /**\n     * Visible to screenreaders only.\n     */\n    .sr-only {\n      position: absolute;\n      left: -9999999px;\n      top: 0;\n      height: 0;\n      width: 0;\n      overflow: hidden;\n    }\n    /**\n    * Hide elements from all users.\n    *\n    * Used for elements which should not be immediately displayed to any user. An\n    * example would be a collapsible fieldset that will be expanded with a click\n    * from a user. The effect of this class can be toggled with the jQuery show()\n    * and hide() functions.\n    */\n    .element-hidden {\n      display: none;\n    }\n\n    /**\n    * Hide elements visually, but keep them available for screen-readers.\n    *\n    * Used for information required for screen-reader users to understand and use\n    * the site where visual display is undesirable. Information provided in this\n    * manner should be kept concise, to avoid unnecessary burden on the user.\n    * \"!important\" is used to prevent unintentional overrides.\n    */\n    .element-invisible {\n      position: absolute !important;\n      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n      clip: rect(1px, 1px, 1px, 1px);\n      overflow: hidden;\n      height: 1px;\n    }\n\n    /**\n    * The .element-focusable class extends the .element-invisible class to allow\n    * the element to be focusable when navigated to via the keyboard.\n    */\n    .element-invisible.element-focusable:active,\n    .element-invisible.element-focusable:focus {\n      position: static !important;\n      clip: auto;\n      overflow: visible;\n      height: auto;\n    }\n    @media screen {\n      /**\n       * Visible only when printed. Invisible on screen.\n       */\n      .print-only {\n        display: none;\n      }\n    }\n    @media print {\n      /**\n       * Visible only on screen. Invisible when printed.\n       */\n      .screen-only {\n        display: none;\n      }\n    }\n  </style>\n"]);_templateObject_80d31b50f9ac11e8bf00715a645b92ed=function _templateObject_80d31b50f9ac11e8bf00715a645b92ed(){return data};return data}var styleElement=document.createElement("dom-module"),css=(0,_polymerElement.html)(_templateObject_80d31b50f9ac11e8bf00715a645b92ed());styleElement.appendChild(css);styleElement.register("lrn-shared-styles")});