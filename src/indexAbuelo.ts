// import Employee, { Attribute } from "./components/MovieCards/moviecards";
import Nav from "./components/Dashboard/nav";
import * as components from "./components/indexPadre";
import { moviesdata } from "./data/moviesdata";
import { seriesdata } from "./data/seriesdata";

class AppContainer extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <nav-component></nav-component>
            `;        
        }
    }
}

customElements.define('app-container', AppContainer);
