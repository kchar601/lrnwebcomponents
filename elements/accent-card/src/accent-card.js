/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css, LitElement } from "lit";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import { DDDSuper } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
/**
 * `accent-card`
 * @element accent-card
 * a card with optional accent stylings.
 * 
 *
 * @extends SimpleColors

 * @demo ./demo/index.html demo
 * @demo ./demo/orientation.html card orientation
 * @demo ./demo/borders.html borders and shadow
 * @demo ./demo/images.html image aligmnent
 * @demo ./demo/imageWidth.html image Width
 */
class AccentCard extends IntersectionObserverMixin(DDDSuper(LitElement)) {
  /**
   * Store tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "accent-card";
  }
  // render function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          margin: 0 0 var(--ddd-spacing-4);
          background-color:
            var(
              --ddd-theme-accent,
              var(--accent-card-accent, white)
          );
          border-radius: var(--ddd-radius-xs);
          box-shadow: var(--ddd-boxShadow-sm);
          --base-width: 480px;
          width: var(
            --accent-card-width,
            var(--base-width)
          ); /* default width - used css variable for container query */
          container-type: inline-size; /* set up container query */
          --imgHW: 100%;
        }
        :host([horizontal]) {
          --base-width: 100%;
        }

        :host([image-align]) .image-outer,
        :host([image-valign]) .image-outer {
          height: var(--image-height, 300px);
        }

        .card {
          width: 100%;
          box-sizing: border-box;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-xs);
          border-top: var(--ddd-border-lg);
          overflow: hidden;
          position: relative;
        }

        :host([no-border]) .card {
          border-top: var(--ddd-border-xs);
          border-top-color: var(--ddd-theme-primary, var(--accent-card-color, #000));
        }
        :host([no-border][horizontal]) .card {
          border-left: var(--ddd-border-xs);
          border-left-color: var(--ddd-theme-primary, var(--accent-card-color, #000));
        }

        .body {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

        :host([horizontal]) .card {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          border: var(--ddd-border-xs);
          border-left: var(--ddd-border-lg);
          border-left-color: var(--ddd-theme-primary, var(--accent-card-color, #000));
        }
        @container (max-width: 499px) {
          :host([horizontal]) .card {
            /* Ensure the card layout follows the vertical design */
            display: block;
          }
          :host([horizontal]) .card div.image-outer {
            width: 100%;
          }
        }

        :host([flat]) {
          box-shadow: none;
        }
        :host([flat]:not([accent-background])) {
          border: var(--ddd-border-xs);
          border-color: var(--accent-card-footer-border-color);
        }
        :host(:not([horizontal]):not([no-border])) .card {
          border-top: var(--ddd-border-lg);
          border-top-color: var(--ddd-theme-primary, var(--accent-card-color, #000));
        }
        :host([horizontal]:not([no-border])) .card {
          border-left: var(--ddd-border-lg);
          border-left-color: var(--ddd-theme-primary, var(--accent-card-color, #000));
        }
        .image-outer {
          display: flex;
          box-sizing: border-box;
          position: relative;
          overflow: visible;
        }
        :host([horizontal]) .image-outer {
          width: var(--accent-card-image-width, 35%);
          flex: 0 0 auto;
        }
        :host([horizontal][image-width="wide"]) .image-outer {
          width: var(--accent-card-image-width, 50%);
        }
        :host([horizontal][image-width="narrow"]) .image-outer {
          width: var(--accent-card-image-width, 20%);
        }
        :host([image-width="narrow"]:not([horizontal])) {
          --base-width: 320px;
        }
        :host([image-width="wide"]:not([horizontal])) {
          --base-width: 640px;
        }

        :host(:not([horizontal])) .image-outer {
          height: auto;
          width: 100%;
          min-height: var(--accent-card-image-min-height, 100px);
        }
        .image {
          object-fit: scale-down;
          height: var(--imageHW, 100%);
          width: var(--imageHW, 100%);
        }
        :host(:not([image-src])) .image-outer,
        :host(:not([image-src])) .image {
          display: none;
          height: 0;
        }
        :host([horizontal][image-width="wide"]) .image {
          object-fit: contain;
        }
        :host([image-align]) .image,
        :host([image-valign]) .image,
        :host([horizontal][image-width="wide"][image-valign]) .image,
        :host([horizontal][image-width="wide"][image-align]) .image {
          object-fit: cover;
        }
        :host([image-align="left"]) .image {
          object-position: left;
        }
        :host([image-align="right"]) .image {
          object-position: right;
        }
        :host([image-valign="top"]) .image {
          object-position: top;
        }
        :host([image-valign="bottom"]) .image {
          object-position: bottom;
        }
        #imagecorner {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        ::slotted([slot="image-corner"]) {
          text-align: right;
          color: var(
            --accent-card-background-color,
            var(--simple-colors-default-theme-grey-1, #fff)
          );
        }
        .body {
          flex-grow: 1;
          overflow: visible;
          padding: 0 var(--ddd-spacing-5);
        }
        #heading {
          flex: 0 0 auto;
          display: flex;
          justify-content: space-between;
          margin: 0;
          overflow: hidden;
        }
        :host([accent-heading][accent-color]) #heading ::slotted(*) {
          color: var(--accent-card-color);
        }
        #subheading {
          flex: 0 0 auto;
          font-style: italic;
        }
        #content {
          flex: 1 1 auto;
        }
        ::slotted(*[slot]:first-of-type) {
          margin-top: 0;
          margin-block-start: 0;
        }
        ::slotted(*[slot]:last-of-type) {
          margin-bottom: 0;
          margin-block-end: 0;
        }
        .footer {
          display: flex;
          flex: 0 0 auto;
          margin: var(--ddd-spacing-2) 0 0;
          padding: var(--ddd-spacing-2) 0 0;
          justify-content: flex-end;
          padding-bottom: var(--bottom-padding, 0);
          align-content: end;
        }
        .footer a {
          margin-left: var(--ddd-spacing-2);
        }
        .footer ::slotted(*) {
          display: inline-flex;
        }
        :host([ready]) [data-layout-slotname] {
          transition: var(
            --hax-layout-container-transition,
            0.5s width ease-in-out,
            0.5s padding ease-in-out,
            0.5s margin ease-in-out
          );
        }

        :host([link]) .footer,
        .footer:has(*:not(:empty)) {
          border-top: var(--ddd-border-xs);
          border-color: var(
            --accent-card-footer-border-color,
            var(--ddd-theme-default-limestoneLight, #ddd)
          );
          padding-top: var(--ddd-spacing-4);
          --bottom-padding: var(--ddd-spacing-4);
        }

        simple-icon-button-lite {
          aspect-ratio: 1;
          color: var(--accent-card-color);
        }

        a:hover {
          text-decoration: none;
          opacity: 0.8;
        }
      `,
    ];
  }
  render() {
    return html`
      <div class="card">
        <div
          class="image-outer"
          part="image-wrapper"
          ?hidden="${!this.elementVisible || !this.imageSrc}"
        >
          ${this.imageSrc
            ? html` <img src="${this.imageSrc}" class="image" part="image" /> `
            : ""}
          <div id="imagecorner"><slot name="image-corner"></slot></div>
        </div>
        <div class="body">
          <div id="heading">
            <div>
              <slot name="heading"></slot>
            </div>
            <div data-label="Corner">
              <slot name="corner"></slot>
            </div>
          </div>
          <div id="subheading">
            <slot name="subheading"></slot>
          </div>
          <div id="content">
            <slot name="content"></slot>
          </div>
          <div class="footer">
            ${this.link
              ? html`
                  <a
                    href="${this.link}"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <slot name="footer"></slot>
                    <simple-icon-button-lite
                      icon="${this.icon}"
                      style="${this.iconSize
                        ? `--simple-icon-height: var(--ddd-icon-${this.iconSize}); --simple-icon-width: var(--ddd-icon-${this.iconSize});`
                        : `--simple-icon-height: var(--ddd-icon-xxs); --simple-icon-width: var(--ddd-icon-xxs);`}"
                    ></simple-icon-button-lite>
                  </a>
                `
              : html`<slot name="footer"></slot>`}
          </div>
        </div>
      </div>
    `;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      type: "grid",
      canScale: true,

      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: "Card",
        description: "A card with optional accent styling.",
        icon: "chrome-reader-mode",
        color: "light-blue",
        tags: ["Layout", "content", "card", "Image", "Presentation", "style"],
        handles: [
          {
            type: "media",
            url: "source",
          },
          {
            type: "image",
          },
          {
            type: "text",
            url: "source",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
          owner: "The Pennsylvania State University",
        },
      },
      settings: {
        configure: [
          {
            slot: "heading",
            title: "Heading",
            description: "A heading for card.",
            inputMethod: "textfield",
            slotWrapper: "h3",
            allowedSlotWrappers: ["h3", "h4", "h5", "h6"],
          },
          {
            slot: "subheading",
            title: "Subheading",
            description: "An optional subheading for card.",
            inputMethod: "textfield",
            slotWrapper: "p",
            allowedSlotWrappers: ["div", "p", "h4", "h5", "h6"],
          },
          {
            slot: "content",
            title: "Content",
            description: "Content for card.",
            inputMethod: "textfield",
            slotWrapper: "p",
          },
          {
            slot: "footer",
            title: "Footer",
            description: "An optional footer for card.",
            inputMethod: "textfield",
            slotWrapper: "p",
            allowedSlotWrappers: ["div", "p"],
          },
          {
            property: "imageSrc",
            title: "Image",
            description: "Optional image",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            icon: "editor:insert-photo",
          },
          {
            property: "imageAlign",
            title: "imageAlign",
            description: "Image Horizontal Alignment",
            inputMethod: "select",
            options: {
              left: "left",
              center: "center",
              right: "right",
            },
          },
          {
            property: "imageValign",
            title: "imageValign",
            description: "Image Vertical Alignment",
            inputMethod: "select",
            options: {
              top: "top",
              center: "center",
              bottom: "bottom",
            },
          },
          {
            property: "horizontal",
            title: "Horizontal",
            description: "Horizontal orientation?",
            inputMethod: "boolean",
          },
          {
            property: "noBorder",
            title: "No Border Accent",
            description: "Remove border accent?",
            inputMethod: "boolean",
          },
          {
            property: "flat",
            title: "Flat",
            description: "Remove box shadow?",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            slot: "corner",
            title: "Corner",
            description: "Content for card corner.",
            inputMethod: "textfield",
            slotWrapper: "div",
            allowedSlotWrappers: ["div", "p"],
          },
        ],
      },
      demoSchema: [
        {
          tag: "accent-card",
          properties: {
            accentColor: "red",
            accentHeading: true,
            horizontal: true,
            imageSrc: "http://placekitten.com/200/600",
          },
          content:
            '<h3 slot="heading">Accent Card</h3><h5 slot="subheading">A card with optional accent stylings.</h5><div slot="content"><p>This card is highly customizable to contain any content you\'d like</p></div>',
        },
      ],
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
    };
  }
  constructor() {
    super();
    this.flat = false;
    this.horizontal = false;
    this.imageAlign = null;
    this.imageSrc = null;
    this.imageValign = null;
    this.noBorder = false;
    this.ready = false;
    this.link = null;
    this.icon = "icons:add-circle-outline";
  }
  /**
   * life cycle
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.ready = true;
    }, 100);
  }

  // properties available to custom element for data binding
  static get properties() {
    return {
      ...(super.properties || {}),

      /**
       * Display card as flat (no box shadow);
       */
      flat: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Display card as a horizontal layout? Default is vertical.
       */
      horizontal: {
        type: Boolean,
        reflect: true,
      },

      /**
       * "Optional": Horizontal alignment of image, so that:
       * - "left" will align left edge of image.
       * - "right" will align right edge of image.
       * - "center" will align center of image
       * - A null will allow temporary support to deprecated CSS variables
       */
      imageAlign: {
        type: String,
        attribute: "image-align",
        reflect: true,
      },

      /**
       * "Optional": source for an image on card
       */
      imageSrc: {
        type: String,
        attribute: "image-src",
      },

      /**
       * "Optional": vertical alignment of image, so that:
       * - "top" will align top of edge of image.
       * - "bottom" will align bottom edge of image.
       * - "center" will align middle of image.
       * - A null will allow temporary support to deprecated CSS variables
       */
      imageValign: {
        type: String,
        attribute: "image-valign",
        reflect: true,
      },

      /**
       * Removes think accent border
       */
      noBorder: {
        type: Boolean,
        attribute: "no-border",
        reflect: true,
      },
      ready: {
        type: Boolean,
        reflect: true,
      },
      link: {
        type: String,
        reflect: true,
      },
      iconSize: {
        type: String,
        reflect: true,
        attribute: "icon-size",
      },
      imageWidth: {
        type: String,
        reflect: true,
        attribute: "image-width",
      },
    };
  }
}
customElements.define(AccentCard.tag, AccentCard);
export { AccentCard };
