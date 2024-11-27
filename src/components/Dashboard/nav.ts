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
                    <div id="nav-buttons"></div>
                </section>
                <div class="profile">
                    <img src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/person.png?raw=true" alt="Profile User Picture" class="profile-img">
                </div>
            </nav>
            `;

            const containerBtn = this.shadowRoot.querySelector("#nav-buttons")
            const pushContainerBtn = this.shadowRoot.querySelector(".navbar")
            const sec = this.shadowRoot.querySelector(".sec")
            const profile = this.shadowRoot.querySelector(".profile")

            if (containerBtn && pushContainerBtn && sec && profile) {

                const createButton = this.ownerDocument.createElement("btn-component") as Button;
                createButton.setAttribute("color", "#5D3B94");
                createButton.setAttribute("label", "Create");
                createButton.setAttribute("textColor", "white");
    
                createButton?.addEventListener('click', () => {
                    dispatch(navigate(Screens.FORMREVIEW));
                });

                const searchButton = this.ownerDocument.createElement("btn-component") as Button;
                searchButton.setAttribute("color", "white");
                searchButton.setAttribute("label", "Search");
                searchButton.setAttribute("textColor", "#5D3B94");
    
                searchButton?.addEventListener('click', () => {
                    dispatch(navigate(Screens.DASHBOARD));
                });

                const favoritesButton = this.ownerDocument.createElement("btn-component") as Button;
                favoritesButton.setAttribute("color", "white");
                favoritesButton.setAttribute("label", "Favorites");
                favoritesButton.setAttribute("textColor", "#5D3B94");
    
                favoritesButton?.addEventListener('click', () => {
                    dispatch(navigate(Screens.FAVORITOS));
                });
    
                containerBtn.appendChild(favoritesButton)
                containerBtn.appendChild(searchButton)
                containerBtn.appendChild(createButton);
                sec.appendChild(containerBtn)
                pushContainerBtn.appendChild(sec)
                pushContainerBtn.appendChild(profile)
                this.shadowRoot.appendChild(pushContainerBtn);
            }
        }

        }
    }

customElements.define('nav-component', Nav);
export default Nav;