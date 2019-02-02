import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";import"./node_modules/@gotham/gotham-logo/gotham-logo.js";class GothamScienceHeader extends LitElement{render(){return html`
<style>:host {
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
  color: white;
}

.logo {
  font-size: 1.8em;
}

.left-section {
  flex: 1 1 auto;
}</style>
<div class="header">
  <div class="left-section">
    <div class="logo">
      <gotham-logo></gotham-logo>
    </div>
    <div class="subtitle">
      ${this.subtitle}
    </div>
  </div>
  <div class="right-section">
    <slot></slot>
  </div>
</div>`}static get properties(){return{subtitle:{name:"subtitle",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}tag(){return"gotham-science-header"}constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("gotham-science-header",GothamScienceHeader);export{GothamScienceHeader};