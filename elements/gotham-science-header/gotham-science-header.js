/**
 * Copyright 2019 Gotham University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from "lit-element";
import "@gotham/gotham-logo/gotham-logo.js";

/**
 * `gotham-science-header`
 * ``
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class GothamScienceHeader extends LitElement {
  // render function
  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        .header {
          display: flex;
          width: auto;
          justify-content: center;
          background: purple;
          padding: 1em;
          color: burlywood;
          align-items: center;
        }

        .logo {
          font-size: 1.8em;
        }

        gotham-logo {
          --gotham-logo-height: 80px;
          display: inline-block;
          margin-right: 0.5em;
        }

        .left-section {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
        }

        .title {
          font-size: 40px;
          color: white;
        }

        .subtitle {
          font-size: 25px;
        }
      </style>
      <div class="header">
        <div class="left-section">
          <div class="logo">
            <gotham-logo></gotham-logo>
          </div>
          <div class="names">
            <div class="title">Gotham University</div>
            <div class="subtitle">
              ${this.subtitle}
            </div>
          </div>
        </div>
        <div class="right-section">
          <slot></slot>
        </div>
      </div>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      subtitle: {
        name: "subtitle",
        type: "String",
        value: "",
        reflectToAttribute: false,
        observer: false
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "gotham-science-header";
  }

  // life cycle
  constructor() {
    super();
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}
customElements.define("gotham-science-header", GothamScienceHeader);
export { GothamScienceHeader };
