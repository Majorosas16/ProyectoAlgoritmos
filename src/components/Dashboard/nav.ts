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

    logout() {
		indexedDB.deleteDatabase('firebase-heartbeat-database');
		indexedDB.deleteDatabase('firebaseLocalStorageDb');
		window.location.reload();
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
            const profile = this.shadowRoot.querySelector(".profile");
            const logo = this.shadowRoot.querySelector(".logo")

            if (containerBtn && pushContainerBtn && sec && profile && logo) {

                logo.addEventListener('click', () => {
                    console.log("Logo profile clicked");
                    dispatch(navigate(Screens.DASHBOARD)); 
                });

                const favoritesButton = this.ownerDocument.createElement("btn-component") as Button;
                favoritesButton.setAttribute("color", "white");
                favoritesButton.setAttribute("label", "Favorites");
                favoritesButton.setAttribute("textColor", "#5D3B94");
    
                favoritesButton?.addEventListener('click', () => {
                    dispatch(navigate(Screens.FAVORITOS));
                });

                const LogoutButton = this.ownerDocument.createElement("btn-component") as Button;
                LogoutButton.setAttribute("color", "#5D3B94");
                LogoutButton.setAttribute("label", "LogOut");
                LogoutButton.setAttribute("textColor", "white");

                LogoutButton.addEventListener('click', this.logout);
    

                profile.addEventListener('click', () => {
                    console.log("Profile clicked");
                    dispatch(navigate(Screens.PROFILE)); 
                });

                containerBtn.appendChild(favoritesButton)
                containerBtn.appendChild(LogoutButton);
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