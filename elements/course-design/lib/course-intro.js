import { LitElement, html, css } from "lit";
import "./course-intro-header.js";
import "./course-intro-lesson-plans.js";
import "./course-intro-footer.js";

export class CourseIntro extends LitElement {
  static get tag() {
    return "course-intro";
  }
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        
      `,
    ];
  }
  constructor() {
    super();
    // Add the included Lato font-family
    let link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
    );
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
  }
  render() {
    return html`
      <course-intro-header></course-intro-header>
      <course-intro-lesson-plans></course-intro-lesson-plans>
      <course-intro-footer>
        <div id="company-logo" slot="footer-left">
          <slot name="footer-left"></slot>
        </div>
        <div id="organization-logo" slot="footer-right">
          <slot name="footer-right"></slot>
        </div>
      </course-intro-footer>
    `;
  }
}
customElements.define(CourseIntro.tag, CourseIntro);
