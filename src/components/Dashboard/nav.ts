console.log("Archivo nav.ts cargado");
class Nav extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            console.log("Rendering nav component");
            this.shadowRoot.innerHTML = `
                <h1>Uta</h1>
            `;
        }
    }
}

customElements.define('nav-component', Nav);
export default Nav;