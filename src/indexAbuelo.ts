// import Employee, { Attribute } from "./components/MovieCards/moviecards";
import * as components from "./components/indexPadre";
import "./components/Dashboard/nav"
import "./components/Carrusel/carrusel"
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
            
            <link rel="stylesheet" href="../src/styles.css">

            <nav-component></nav-component>
            <carousel-component></carousel-component>
            `;        
        }
    }
}

customElements.define('app-container', AppContainer);
