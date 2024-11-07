import "../Button/button"
import Button from "../Button/button";
import { BtnAttribute } from "../Button/button"
import { dispatch } from "../../store/store";
import { navigate } from "../../store/actions"
import { Screens } from "../../types/store";

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

            const containerBtn = this.shadowRoot.querySelector(".nav-buttons")

            if (containerBtn) {
                const createButton = this.ownerDocument.createElement("btn-component") as Button;
                createButton.setAttribute("color", "#5D3B94");
                createButton.setAttribute("label", "Create");
                createButton.setAttribute("textColor", "white");
    
                createButton?.addEventListener('click', () => {
                    dispatch(navigate(Screens.FORMREVIEW));
                });
    
                containerBtn.appendChild(createButton);
                this.shadowRoot.appendChild(containerBtn);
            } else {
                console.error("No se pudo encontrar el contenedor de botones");
            }
        }

        }
    }

customElements.define('nav-component', Nav);
export default Nav;