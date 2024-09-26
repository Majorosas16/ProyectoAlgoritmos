import "../Button/button"

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
            this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="/src/components/Dashboard/nav.css">

             <nav class="navbar">
                <section class="sec">
                    <div class="logo">
                        <img src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/FirstDelivery/src/Recursos/Icon.png?raw=true" alt="MovieMoodIcon"  class="logo-img">
                    </div>
                    <div class="nav-buttons">
                        <btn-component color="white" label="Favorites" textColor="#5D3B94"></btn-component>
                        <btn-component color="white" label="Search" textColor="#5D3B94"></btn-component>
                        <btn-component color="#5D3B94" label="Create" textColor="white"></btn-component>
                    </div>
                </section>
                <div class="profile">
                    <img src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/person.png?raw=true" alt="Profile User Picture" class="profile-img">
                </div>
            </nav>
            `;
        }
    }
}

customElements.define('nav-component', Nav);
export default Nav;