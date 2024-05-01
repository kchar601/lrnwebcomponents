/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css, LitElement } from "lit";
import { DDDSuper } from "@lrnwebcomponents/d-d-d/d-d-d.js";
/**
  * `figure-label`
  * @element figure-label
  * `Figure label element to mark media assets within content.`
  *
  * @microcopy - language worth noting:
  *  -
  *
  * @lit-element
  * @demo demo/index.html
  */
class FigureLabel extends DDDSuper(LitElement) {
  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        #wrap {
          display: flex;
          margin-bottom: var(--ddd-spacing-4);
        }

        #title {
          display: flex;
          align-items: center;
          font-family: var(--ddd-font-primary);
          background-color: var(
            --ddd-theme-primary,
            var(
              --figure-label-primary,
                var(--ddd-theme-default-limestoneLight)
             )
          ); /* is this hierarchy correct? */
          color: var(
            --lowContrast-override,
            var(
              --ddd-theme-bgContrast,
              var(--ddd-theme-default-potentialMidnight)
            )
          );
          font-size: var(--ddd-font-size-4xs);
          padding: var(--ddd-spacing-3);
          font-weight: var(--ddd-font-weight-bold);
        }

        #description {
          display: flex;
          align-items: center;
          font-family: var(--ddd-font-primary);
          border: var(--ddd-border-sm);
          border-color: var(
            --ddd-theme-primary,
            var(
              --figure-label-primary,
                var(--ddd-theme-default-limestoneLight)
             )
          );
          border-left: none;
          padding: var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-4xs);
          background: var(
            --ddd-theme-accent,
            var(
              --figure-label-accent,
              var(--ddd-theme-default-white)
            )
          );
          font-weight: var(--ddd-font-weight-regular);
          color: var(
            --lowContrast-override,
            var(
              --ddd-theme-default-potentialMidnight
            )
          );
        }
      `,
    ];
  }

  // render function
  render() {
    return html`<div id="wrap">
      <div id="title">${this.title}</div>
      <div id="description">${this.description}</div>
    </div>`;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Figure label",
        description:
          "Figure label element to mark media assets within content.",
        icon: "icons:android",
        color: "green",
        tags: [
          "content",
          "figure",
          "a11y",
          "accessibility",
          "image",
          "caption",
          "description",
        ],
        meta: {
          author: "HAXTheWeb core team",
          owner: "PSU",
        },
      },
      settings: {
        configure: [
          {
            property: "title",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android",
          },
          {
            property: "description",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android",
          },
        ],
        advanced: [],
      },
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "figure-label";
  }
}
customElements.define(FigureLabel.tag, FigureLabel);

export { FigureLabel };
