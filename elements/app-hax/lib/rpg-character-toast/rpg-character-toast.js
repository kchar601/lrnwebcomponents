import { css, html, unsafeCSS } from "lit";
import { SimpleToastEl } from "@lrnwebcomponents/simple-toast/lib/simple-toast-el.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import "@lrnwebcomponents/future-terminal-text/future-terminal-text.js";

const SpeechBubbleL = new URL("./images/SpeechBubbleL.svg", import.meta.url)
  .href;
const SpeechBubbleMiddle = new URL(
  "./images/SpeechBubbleMiddle.svg",
  import.meta.url
).href;
const SpeechBubbleR = new URL("./images/SpeechBubbleR.svg", import.meta.url)
  .href;
export class RPGCharacterToast extends SimpleToastEl {
  static get tag() {
    return "rpg-character-toast";
  }

  constructor() {
    super();
    this.awaitingMerlinInput = false;
    this.windowControllers = new AbortController();
    this.text = "Saved";
    this.closeText = "Close";
    this.merlin = false;
    this.classStyle = "";
    this.future = false;
    this.duration = 3000;
    this.accentColor = "grey";
    this.dark = false;
    this.eventCallback = null;
    this.fire = false;
    this.hat = "coffee";
    this.walking = false;
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host([opened]) {
          display: flex;
        }

        future-terminal-text {
          min-width: 300px;
          overflow-wrap: break-all;
          text-overflow: ellipsis;
          line-height: 36px;
          font-size: 18px;
          text-align: left;
          padding: 36px 0px;
          max-width: 50vw;
        }

        .merlin {
          --simple-icon-height: 100px;
          --simple-icon-width: 100px;
          background-color: var(--simple-colors-default-theme-accent-1, white);
          display: block;
          height: 150px;
          width: 100px;
          margin: 6px 0 0 0;
          padding: 16px;
        }
        .awaiting-input {
          --simple-icon-height: 50px;
          --simple-icon-width: 50px;
          width: 100px;
          margin: 6px 0px 0px;
          padding: 16px;
          color: var(--simple-colors-default-theme-purple-6, purple);
          vertical-align: middle;
          display: inline-flex;
          height: 100px;
        }
        :host([hidden]) {
          display: none;
        }
        :host {
          --simple-toast-bottom: 0px;
          --simple-toast-bottom-offscreen: -284px;
          height: 142px;
          display: none;
          width: var(--simple-toast-width, auto);
          color: var(
            --simple-toast-color,
            var(--simple-colors-default-theme-accent-12, black)
          );
          background-color: transparent;
          top: var(--simple-toast-top);
          margin: var(--simple-toast-margin, 4px);
          padding: var(--simple-toast-padding, 4px);
          bottom: var(--simple-toast-bottom, 36px);
          right: var(--simple-toast-right, 0px);
          border: var(--simple-toast-border);
          z-index: var(--simple-toast-z-index, 10000000);
          font-size: var(--simple-toast-font-size, 18px);
          font-family: sans-serif;
          font-weight: bold;
          text-align: center;
          vertical-align: middle;
        }
        rpg-character {
          width: 64px;
          margin: 0;
          padding: 0;
        }
        .bubble {
          height: 142px;
          display: inline-flex;
          margin-top: 6px;
        }
        .mid {
          line-height: 142px;
          background-color: white;
          background-repeat: repeat-x;
          background-image: url("${unsafeCSS(SpeechBubbleMiddle)}");
          padding: 54px 2px 0 2px;
          display: block;
        }
        .message {
          line-height: 16px;
          font-size: 16px;
          height: 16px;
          display: block;
          margin-bottom: 16px;
        }
        .buttons {
          display: block;
          line-height: 16px;
          font-size: 16px;
          height: 16px;
        }
        .dismiss {
          padding: 4px;
          font-weight: bold;
          background-color: black;
          color: white;
          border: 4px solid black;
          border-radius: none;
          margin-left: 4px;
          cursor: pointer;
        }
        .leftedge {
          background-image: url("${unsafeCSS(SpeechBubbleL)}");
          width: 20px;
          background-color: white;
        }
        .rightedge {
          background-image: url("${unsafeCSS(SpeechBubbleR)}");
          width: 40px;
          background-color: white;
        }
        :host([dark-mode]) .mid,
        :host([dark-mode]) .leftedge,
        :host([dark-mode]) .rightedge {
          filter: invert(1);
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      darkMode: {
        type: Boolean,
        reflect: true,
        attribute: "dark-mode",
      },
      fire: { type: Boolean },
      hat: { type: String },
      walking: { type: Boolean },
      /**
       * Opened state of the toast, use event to change
       */
      opened: {
        type: Boolean,
        reflect: true,
      },
      awaitingMerlinInput: {
        type: Boolean,
        attribute: "awaiting-merlin-input",
      },
      merlin: {
        type: Boolean,
      },
      future: {
        type: Boolean,
      },
      /**
       * Plain text based message to display
       */
      text: {
        type: String,
      },
      /**
       * Class name, fit-bottom being a useful one
       */
      classStyle: {
        type: String,
        attribute: "class-style",
      },
      /**
       * How long the toast message should be displayed
       */
      duration: {
        type: Number,
      },
      /**
       * Event callback when hide is called
       */
      eventCallback: {
        type: String,
        attribute: "event-callback",
      },
    };
  }

  render() {
    return html` <div class="bubble">
      <span class="bubble leftedge"></span>
      <span class="bubble mid">
        <slot name="pre"></slot>
        ${this.future
          ? html` <future-terminal-text
              fadein
              glitch
              glitch-max="3"
              glitch-duration="40"
            ></future-terminal-text>`
          : html`<div class="message">${this.text}</div>`}
        ${this.awaitingMerlinInput
          ? html`<simple-icon-lite
              class="awaiting-input"
              icon="hax:loading"
            ></simple-icon-lite>`
          : ``}
        ${!this.merlin
          ? html`<div class="buttons">
              <slot></slot
              ><button class="dismiss" @click="${this.hide}">
                ${this.closeText}
              </button>
            </div>`
          : ``}
      </span>
      <span class="bubble rightedge"></span>
      ${this.merlin
        ? html` <simple-icon
            class="merlin"
            icon="hax:wizard-hat"
            accent-color="purple"
          ></simple-icon>`
        : html`
            <rpg-character
              height="180"
              width="64"
              seed="${this.userName}"
              ?fire="${this.fire}"
              hat="${this.hat}"
              ?walking="${this.walking}"
            ></rpg-character>
          `}
    </div>`;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    // can't write here in template bc it's a vanilla innerHTML which would have Lit
    // directives in it and we don't want to ingest and rewrite those
    if (
      changedProperties.has("text") &&
      this.future &&
      this.shadowRoot.querySelector("future-terminal-text")
    ) {
      this.shadowRoot.querySelector("future-terminal-text").innerText =
        this.text;
      this.shadowRoot.querySelector("future-terminal-text")._doGlitch();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "rpg-character-toast-hide",
      this.hideSimpleToast.bind(this),
      { signal: this.windowControllers.signal }
    );
    window.addEventListener(
      "rpg-character-toast-show",
      this.showSimpleToast.bind(this),
      { signal: this.windowControllers.signal }
    );
  }

  hideSimpleToast(e) {
    // event always trumps waiting for input
    this.awaitingMerlinInput = false;
    this.hide();
  }

  /**
   * life cycle, element is removed from the DOM
   */
  disconnectedCallback() {
    this.windowControllers.abort();
    super.disconnectedCallback();
  }

  /**
   * Show / available callback
   */
  showSimpleToast(e) {
    // wipe slot
    while (this.firstChild !== null) {
      this.removeChild(this.firstChild);
    }
    setTimeout(() => {
      if (e.detail.slot) {
        this.appendChild(e.detail.slot);
      }
    }, 0);
    // force this element to be hidden prior to showing it
    this.duration = e.detail.duration ? e.detail.duration : 4000;
    this.fire = e.detail.fire ? e.detail.fire : false;
    this.hat = e.detail.hat ? e.detail.hat : "coffee";
    this.merlin = e.detail.merlin ? e.detail.merlin : false;
    this.walking = e.detail.walking ? e.detail.walking : false;
    this.text = e.detail.text ? e.detail.text : "Saved";
    this.future = e.detail.future ? e.detail.future : false;
    this.classStyle = e.detail.classStyle ? e.detail.classStyle : "";
    this.eventCallback = e.detail.eventCallback ? e.detail.eventCallback : null;
    this.dark = e.detail.dark ? e.detail.dark : false;
    this.accentColor = e.detail.accentColor ? e.detail.accentColor : "grey";
    this.alwaysvisible = e.detail.alwaysvisible
      ? e.detail.alwaysvisible
      : false;
    // already open and waiting for input, don't do anything
    if (e.detail.awaitingMerlinInput && this.duration) {
      // should appear to switch into waiting for input mode prior to closing state
      setTimeout(() => {
        this.style.animation = "none";
        this.awaitingMerlinInput = e.detail.awaitingMerlinInput;
      }, this.duration / 2);
    } else {
      this.awaitingMerlinInput = false;
    }
    this.show();
  }

  show() {
    if (!this.opened) {
      this.opened = true;
    }
  }

  hide() {
    if (!this.awaitingMerlinInput) {
      if (this.eventCallback) {
        const evt = new CustomEvent(this.eventCallback, {
          bubbles: true,
          cancelable: true,
          detail: true,
          composed: true,
        });
        this.dispatchEvent(evt);
      }
      if (!this.alwaysvisible) {
        this.opened = false;
      } else {
        this.style.animation = "fadein 0.3s";
      }
    } else {
      this.style.animation = "fadein 0.3s";
    }
  }
}
customElements.define(RPGCharacterToast.tag, RPGCharacterToast);
