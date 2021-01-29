/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { SimpleToolbarBehaviors } from "@lrnwebcomponents/simple-toolbar/simple-toolbar.js";
import { SimpleToolbarButtonBehaviors } from "@lrnwebcomponents/simple-toolbar/lib/simple-toolbar-button.js";
import { RichTextStyles } from "../buttons/rich-text-editor-button.js";
import "@lrnwebcomponents/rich-text-editor/lib/singletons/rich-text-editor-selection.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

const RichTextEditorToolbarBehaviors = function (SuperClass) {
  return class extends SimpleToolbarBehaviors(SuperClass) {
    /**
     * Store tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "rich-text-editor-toolbar";
    }

    static get miniStyles() {
      return [
        css`
          :host {
            display: block;
            border: none;
            background-color: transparent;
          }
          #floating {
            display: flex;
            background-color: var(--simple-toolbar-button-bg, #ffffff);
            border: var(--simple-toolbar-border-width, 1px) solid
              var(--simple-toolbar-border-color, #ddd);
          }
          #floating[hidden] {
            display: none;
          }
          #buttons[collapsed] {
            width: max-content;
          }
        `,
      ];
    }

    static get baseStyles() {
      return [
        ...super.baseStyles,
        ...RichTextStyles,
        css`
          :host {
            border: var(--simple-toolbar-border-width, 1px) solid
              var(--simple-toolbar-border-color, #ddd);
            background-color: var(--simple-toolbar-button-bg, #ffffff);
          }
        `,
      ];
    }

    static get styles() {
      return [...this.baseStyles, ...super.stickyStyles];
    }
    get undoButton() {
      return {
        command: "undo",
        icon: "undo",
        label: "Undo",
        shortcutKeys: "ctrl+z",
        type: "rich-text-editor-button",
      };
    }
    get redoButton() {
      return {
        command: "redo",
        icon: "redo",
        label: "Redo",
        shortcutKeys: "ctrl+shift+z",
        type: "rich-text-editor-button",
      };
    }
    get historyButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.undoButton, this.redoButton],
      };
    }
    get formatButton() {
      return {
        label: "Format",
        type: "rich-text-editor-heading-picker",
      };
    }
    get boldButton() {
      return {
        command: "bold",
        icon: "editor:format-bold",
        label: "Bold",
        shortcutKeys: "ctrl+b",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get italicButton() {
      return {
        command: "italic",
        icon: "editor:format-italic",
        label: "Italics",
        shortcutKeys: "ctrl+i",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get underlineButton() {
      return { type: "rich-text-editor-underline" };
    }
    get removeFormatButton() {
      return {
        command: "removeFormat",
        icon: "editor:format-clear",
        label: "Erase Format",
        type: "rich-text-editor-button",
      };
    }
    get basicInlineButtonGroup() {
      return {
        type: "button-group",
        buttons: [
          this.formatButton,
          this.boldButton,
          this.italicButton,
          this.removeFormatButton,
        ],
      };
    }
    get linkButton() {
      return {
        icon: "link",
        label: "Link",
        shortcutKeys: "ctrl+k",
        type: "rich-text-editor-link",
      };
    }
    get linkButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.linkButton],
      };
    }
    get cutButton() {
      return {
        command: "cut",
        icon: "content-cut",
        label: "Cut",
        shortcutKeys: "ctrl+x",
        type: "rich-text-editor-button",
      };
    }
    get copyButton() {
      return {
        command: "copy",
        icon: "content-copy",
        label: "Copy",
        shortcutKeys: "ctrl+c",
        type: "rich-text-editor-button",
      };
    }
    get pasteButton() {
      return {
        command: "paste",
        icon: "content-paste",
        label: "Paste",
        shortcutKeys: "ctrl+v",
        type: "rich-text-editor-button",
      };
    }
    get clipboardButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.cutButton, this.copyButton, this.pasteButton],
      };
    }
    get subscriptButton() {
      return {
        command: "subscript",
        icon: "mdextra:subscript",
        label: "Subscript",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get superscriptButton() {
      return {
        command: "superscript",
        icon: "mdextra:superscript",
        label: "Superscript",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get scriptButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.subscriptButton, this.superscriptButton],
      };
    }
    get symbolButton() {
      return {
        symbolTypes: ["symbols"],
        type: "rich-text-editor-symbol-picker",
      };
    }
    get emojiButton() {
      return {
        type: "rich-text-editor-emoji-picker",
      };
    }
    get imageButton() {
      return {
        type: "rich-text-editor-image",
      };
    }
    get insertButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.imageButton, this.symbolButton],
      };
    }
    get orderedListButton() {
      return {
        command: "insertOrderedList",
        icon: "editor:format-list-numbered",
        label: "Ordered List",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get unorderedListButton() {
      return {
        command: "insertUnorderedList",
        icon: "editor:format-list-bulleted",
        label: "Unordered List",
        toggles: true,
        type: "rich-text-editor-button",
      };
    }
    get blockquoteButton() {
      return {
        command: "formatBlock",
        commandVal: "blockquote",
        label: "Blockquote",
        icon: "editor:format-quote",
        shortcutKeys: "ctrl+'",
        type: "rich-text-editor-button",
      };
    }
    get indentButton() {
      return {
        command: "indent",
        icon: "editor:format-indent-increase",
        event: "text-indent",
        label: "Increase Indent",
        shortcutKeys: "ctrl+]",
        type: "rich-text-editor-button",
      };
    }
    get outdentButton() {
      return {
        command: "outdent",
        event: "text-outdent",
        icon: "editor:format-indent-decrease",
        label: "Decrease Indent",
        shortcutKeys: "ctrl+[",
        type: "rich-text-editor-button",
      };
    }
    get listIndentButtonGroup() {
      return {
        type: "button-group",
        buttons: [
          this.orderedListButton,
          this.unorderedListButton,
          this.blockquoteButton,
          this.indentButton,
          this.outdentButton,
        ],
      };
    }
    get saveButton() {
      return {
        command: "save",
        icon: "save",
        label: "Save",
        type: "rich-text-editor-button",
      };
    }
    get closeButton() {
      return {
        command: "cancel",
        icon: "close",
        label: "Cancel",
        type: "rich-text-editor-button",
      };
    }
    get saveCloseButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.saveButton],
      };
    }
    get sourceButton() {
      return { type: "rich-text-editor-source-code" };
    }
    get sourceButtonGroup() {
      return {
        type: "button-group",
        buttons: [this.sourceButton],
      };
    }
    get defaultConfig() {
      return [
        this.historyButtonGroup,
        this.basicInlineButtonGroup,
        this.linkButtonGroup,
        this.clipboardButtonGroup,
        this.scriptButtonGroup,
        this.insertButtonGroup,
        this.listIndentButtonGroup,
      ];
    }

    get miniConfig() {
      return [
        {
          type: "button-group",
          buttons: [
            this.boldButton,
            this.italicButton,
            this.removeFormatButton,
          ],
        },
        this.linkButtonGroup,
        this.scriptButtonGroup,
        {
          type: "button-group",
          buttons: [this.orderedListButton, this.unorderedListButton],
        },
      ];
    }

    get miniTemplate() {
      return html`
        <absolute-position-behavior
          ?auto="${this.controls}"
          id="floating"
          fit-to-visible-bounds
          for="${this.controls}"
          ?hidden="${!this.controls}"
          position="top"
        >
          ${super.toolbarTemplate}
        </absolute-position-behavior>
      `;
    }

    // render function for toolbar
    get toolbarTemplate() {
      return super.toolbarTemplate;
    }

    // render function for template
    render() {
      return this.toolbarTemplate;
    }

    // properties available to custom element for data binding
    static get properties() {
      return {
        ...super.properties,
        /**
         * `rich-text-editor` element that is currently in `editing` mode
         */
        editor: {
          name: "editor",
          type: Object,
          attribute: "editor",
        },
        /**
         * `rich-text-editor` unique id
         */
        id: {
          name: "id",
          type: String,
          attribute: "id",
          reflect: true,
        },
        /**
         * current text selected range.
         */
        savedSelection: {
          name: "savedSelection",
          type: Object,
        },
        /**
         * current text selected range, which is actually a range.
         */
        range: {
          name: "range",
          type: Object,
        },
        /**
         * selection singleton
         */
        registered: {
          type: Boolean,
        },
        /**
         * currently selected node
         */
        selectedNode: {
          type: Object,
        },
        /**
         * array of ancestors of currently selected node
         */
        selectionAncestors: {
          type: Array,
        },
        /**
         * when to make toolbar visible:
         * "always" to keep it visible,
         * "selection" when there is an active selection,
         * or defaults to only when connected to an
         */
        show: {
          type: String,
          attribute: "show",
          reflect: true,
        },
        /**
         * Tracks inline widgets that require selection data
         */
        __clickableElements: {
          name: "__clickableElements",
          type: Object,
        },
        /**
         * hides paste button in Firefox
         */
        __pasteDisabled: {
          name: "__pasteDisabled",
          type: Boolean,
          attribute: "paste-disabled",
          reflect: true,
        },
        /**
         * whether prompt is open
         */
        __promptOpen: {
          name: "__promptOpen",
          type: Boolean,
        },
        /**
         * selection singleton
         */
        __selection: {
          type: Object,
        },
      };
    }
    constructor() {
      super();
      import("../buttons/rich-text-editor-button.js");
      import("../buttons/rich-text-editor-source-code.js");
      import("../buttons/rich-text-editor-heading-picker.js");
      import("../buttons/rich-text-editor-symbol-picker.js");
      import("../buttons/rich-text-editor-underline.js");
      import("../buttons/rich-text-editor-image.js");
      import("../buttons/rich-text-editor-link.js");
      this.config = this.defaultConfig;
      this.__clickableElements = {};
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      this.__selection = window.RichTextEditorSelection.requestAvailability();
      this.register();
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        if (propName === "range") this._rangeChange();
        if (propName === "editor") this._editorChange();
      });
    }

    connectedCallback() {
      super.connectedCallback();
      this.register();
    }

    /**
     * life cycle, element is disconnected
     * @returns {void}
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.register(true);
    }
    /**
     * id of editor currently being controlled
     * @readonly
     */
    get controls() {
      return !this.editor ? undefined : this.editor.getAttribute("id");
    }

    get disconnected() {
      return this.show == "always"
        ? false
        : this.show != "selection"
        ? !this.editor
        : this.noSelection;
    }
    get noSelection() {
      return !this.range || this.range.collapsed;
    }

    /**
     * cancels edits to active editor
     * @returns {void}
     */
    cancel() {
      this.dispatchEvent(
        new CustomEvent("cancel", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
    /**
     * closes toolbar
     *
     * @param {object} editor connected rich-text-editor
     */
    close() {
      this.dispatchEvent(
        new CustomEvent("disableediting", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      ); //if (editor) this.disableEditing(editor);
      this.editor = undefined;
      document.body.append(this);
    }
    /**
     * uses selection to create a range placeholder that keeps range highlighted
     *
     * @param {boolean} [add=true] add highlight?
     * @returns {void}
     */
    highlight(add = true) {
      this.dispatchEvent(
        new CustomEvent("highlight", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: add,
        })
      );
    }
    /**
     * handles registration to selection singleton's toolbars list
     * @param {boolean} remove whether to remove
     * @event register
     */
    register(remove = false) {
      window.dispatchEvent(
        new CustomEvent("register", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            remove: remove,
            toolbar: this,
          },
        })
      );
    }
    /**
     * selects a given node inside connected editor
     *
     * @param {object} node
     * @returns {void}
     */
    setRange(range) {
      this.dispatchEvent(
        new CustomEvent("setrange", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            editor: this.editor,
            range: range,
          },
        })
      );
    }
    /**
     * selects a given node inside connected editor
     *
     * @param {object} node
     * @returns {void}
     */
    selectNode(node) {
      this.dispatchEvent(
        new CustomEvent("selectnode", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: node,
        })
      );
    }
    /**
     * selects a given node inside connected editor
     *
     * @param {object} node
     * @returns {void}
     */
    selectNodeContents(node) {
      this.dispatchEvent(
        new CustomEvent("selectnodecontents", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: node,
        })
      );
      //if (this.__selection) this.__selection.selectNodeContents(node, this.editor);
    }
    /**
     * selects a given node inside connected editor
     *
     * @param {object} node
     * @returns {void}
     */
    selectRange(range) {
      this.dispatchEvent(
        new CustomEvent("selectrange", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: range,
        })
      );
      //if (this.__selection) this.__selection.selectRange(range, this.editor);
    }

    /**
     * make an new editable element
     *
     * @param {object} editor an HTML object that can be edited
     * @returns {void}
     */
    newEditor(editor) {
      let content = document.createElement("rich-text-editor");
      editor.parentNode.insertBefore(content, editor);
      content.appendChild(editor);
    }

    /**
     * pastes sanitized clipboard contents into current editor's selected range
     * @param {object} editor an HTML object that can be edited
     * @returns {void}
     */
    pasteFromClipboard() {
      this.dispatchEvent(
        new CustomEvent("pastefromclipboard", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this.editor,
        })
      );
    }
    /**
     * clears toolbar and resets shortcuts
     *
     * @returns
     * @memberof SimpleToolbar
     */
    clearToolbar() {
      if (super.clearToolbar) super.clearToolbar();
      this.__clickableElements = {};
    }
    /**
     * registers button when appended to toolbar
     *
     * @param {object} button button node
     * @memberof SimpleToolbar
     */
    registerButton(button) {
      if (super.registerButton) super.registerButton(button);
      (button.tags || []).forEach(
        (tag) => (this.__clickableElements[tag] = button.handler)
      );
      button.disabled = !this.editor;
      //firefox doesn't allow for clipboard button
      if (button.command === "paste" && !navigator.clipboard) button.remove();
    }
    /**
     * registers button when appended to toolbar
     *
     * @param {object} button button node
     * @memberof SimpleToolbar
     */
    deregisterButton(button) {
      if (super.deregisterButton) super.deregisterButton(button);
      (button.tags || []).forEach(
        (tag) => delete this.__clickableElements[tag]
      );
    }
    /**
     * sets up breadcrumbs when editor changes
     * @returns {void}
     */
    _editorChange() {
      this.range = undefined;
      if (this.breadcrumbs) {
        this.breadcrumbs.controls = this.controls;
        this.breadcrumbs.sticky = this.sticky;
        this.breadcrumbs.controls = this.controls;
        this.breadcrumbs.hidden = this.disconnected;
        if (!!this.editor)
          this.editor.parentNode.insertBefore(
            this.breadcrumbs,
            this.editor.nextSibling
          );
      }
      this.buttons.forEach((button) => {
        if (button.command !== "close") button.disabled = !this.editor;
      });
      console.log("editor change", !this.editor);
    }

    /**
     * Gets updated selected range.
     * @returns {void}
     */
    _rangeChange() {
      if (
        this.range &&
        this.range.commonAncestorContainer &&
        this.editor &&
        this.editor.contains(this.range.commonAncestorContainer)
      ) {
        (this.buttons || []).forEach((button) => {
          button.range = undefined;
          button.range = this.range;
          button.selectedNode = this.selectedNode;
          button.selectionAncestors = this.selectionAncestors;
        });
        if (this.breadcrumbs) {
          this.breadcrumbs.controls = this.controls;
          this.breadcrumbs.selectionAncestors = this.selectionAncestors;
          this.breadcrumbs.hidden = this.disconnected;
        }
      }
    }
  };
};
/**
 * `rich-text-editor-toolbar`
 * default toolbar for rich text editor
 *
### Styling

`<rich-text-editor-toolbar` provides following custom properties and mixins
for styling:

Custom property | Description | Default
----------------|-------------|----------
 *
 * @element rich-text-editor-toolbar
 * @demo ./demo/toolbar.html
 */
class RichTextEditorToolbar extends RichTextEditorToolbarBehaviors(
  LitElement
) {}
window.customElements.define(RichTextEditorToolbar.tag, RichTextEditorToolbar);
export { RichTextEditorToolbar, RichTextEditorToolbarBehaviors };
