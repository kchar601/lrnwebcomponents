/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-list/iron-list.js";
import "@lrnwebcomponents/sites-listing/lib/site-card.js";
import "@polymer/paper-button/paper-button.js";
/**
 * `sites-listing`
 * @demo demo/index.html
 */
class SitesListing extends PolymerElement {
  constructor() {
    super();
    import("@lrnwebcomponents/elmsln-loading/elmsln-loading.js");
  }
  static get template() {
    return html`
      <style>
        :host {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        iron-list {
          flex: 1 1 auto;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.8;
          padding: 16px;
          text-align: center;
          align-content: center;
          justify-content: center;
          height: 100vh;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.8);
          transition: all linear 0.8s;
          visibility: visible;
        }
        #loading div {
          font-size: 32px;
          font-weight: bold;
          padding: 16px;
        }
        #loading[data-loading] {
          background-color: rgba(0, 0, 0, 0);
          opacity: 0;
          visibility: hidden;
        }
        site-card {
          padding: 16px;
          font-size: 16px;
        }
        paper-button.site-card-wrapper {
          margin: 0;
          padding: 0;
        }
      </style>
      <iron-ajax
        id="loaddata"
        auto=""
        loading="{{__loading}}"
        url="[[dataSource]]"
        handle-as="json"
        debounce-duration="250"
        last-response="{{sitesResponse}}"
      ></iron-ajax>
      <div id="loading" data-loading\$="[[!__loading]]">
        <elmsln-loading size="large"></elmsln-loading>
        <div>Loading..</div>
      </div>
      <iron-list id="list" items="[[sites]]" as="site" grid="">
        <template>
          <paper-button
            on-focusin="_mouseEnter"
            on-focusout="_mouseLeave"
            data-site-id\$="[[site.id]]"
            class="site-card-wrapper"
            on-click="_siteClicked"
          >
            <site-card
              data-site-id\$="[[site.id]]"
              size="[[size]]"
              image="[[site.metadata.image]]"
              icon="[[site.metadata.icon]]"
              name="[[site.title]]"
              title="[[site.description]]"
              elevation="2"
            ></site-card>
          </paper-button>
        </template>
      </iron-list>
    `;
  }
  static get tag() {
    return "sites-listing";
  }
  static get properties() {
    return {
      /**
       * Object, JSON Outline Schema format
       */
      sitesResponse: {
        type: Object,
        notify: true,
        observer: "_sitesResponseChanged"
      },
      /**
       * Array of site objects
       */
      sites: {
        type: Array,
        notify: true
      },
      /**
       * Size of the cards
       */
      size: {
        type: String,
        value: "large"
      },
      /**
       * Data Source to power the loading of sites in JSON Outline Schema format.
       */
      dataSource: {
        type: String
      },
      /**
       * Allow for loading the location in the array rather than firing an event
       */
      loadLocation: {
        type: Boolean,
        value: false
      }
    };
  }
  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    window.removeEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
    super.disconnectedCallback();
  }
  /**
   * force the request to regenerate
   */
  refreshData(e) {
    this.shadowRoot.querySelector("#loaddata").generateRequest();
  }
  /**
   * Parse JSON Outline Schema for the items and bind that to sites
   */
  _sitesResponseChanged(newValue, oldValue) {
    if (newValue) {
      if (typeof newValue.items !== typeof undefined) {
        this.set("sites", []);
        this.set("sites", newValue.items);
        this.notifyPath("sites.*");
      }
    }
  }
  /**
   * Handle tap on paper-button above to redirect to the correct data.
   */
  _siteClicked(e) {
    var local = e.target;
    // this will have the id of the current course
    var active = local.getAttribute("data-site-id");
    // find the course by it's unique id and filter just to it
    let findSite = this.sites.filter(site => {
      if (site.id !== active) {
        return false;
      }
      return true;
    });
    // if we found one, make it the top level item
    if (findSite.length > 0) {
      findSite = findSite.pop();
    }
    // double check we have a URI
    if (this.loadLocation && typeof findSite.location !== typeof undefined) {
      window.location.href = findSite.location;
    }
    this.dispatchEvent(
      new CustomEvent("sites-listing-item-selected", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: findSite
      })
    );
  }
  /**
   * Increase elevation while hovering.
   */
  _mouseEnter(e) {
    let card = e.target.querySelectorAll("site-card")[0];
    card.__oldElevation = card.elevation;
    if (card.elevation + 2 > 5) {
      card.elevation = 5;
    } else {
      card.elevation += 2;
    }
  }

  /**
   * Reset the elevation.
   */
  _mouseLeave(e) {
    let card = e.target.querySelectorAll("site-card")[0];
    card.elevation = card.__oldElevation;
  }
}
window.customElements.define(SitesListing.tag, SitesListing);
export { SitesListing };
