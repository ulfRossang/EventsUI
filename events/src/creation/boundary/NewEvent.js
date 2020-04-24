import { render, html } from "../../lib/lit-html.js";
class NewEvent extends HTMLElement {
    connectedCallback() {
        const template = html`
            <input placeholder="name">
            <button @click=${_ => this.NewEvent()}>create</button>
        `;
        render(template,this);

    }
    NewEvent() {
        console.log("----  button clicked");
    }
}
customElements.define('a-newevent', NewEvent);