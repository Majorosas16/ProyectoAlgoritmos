import { Product } from '../../types/product';
import '../../components/ReviewCard/reviewcard'
import ReviewCard from '../../components/ReviewCard/reviewcard'
import { Attribute } from '../../types/product';
import { credentials } from '../../types/product';
import { review } from '../../types/product';
import { getUser } from '../../utils/Firebase';
import { getFile } from '../../utils/Firebase';
import { getProducts } from '../../utils/Firebase';
import { AppState } from '../../types/store';


import * as components from "../../components/indexPadre";
import "../../components/Dashboard/nav"
import "../../components/navResponsive/navR"
import "../../components/Carrusel/carrusel"


import '../Register/registro';
import '../Dashboard/dashboard';
import { addObserver, appState } from '../../store/store';
import { Screens } from '../../types/store';

class Favoritos extends HTMLElement {

	arrayReview: ReviewCard[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        addObserver(this);
    }

    logout() {
		indexedDB.deleteDatabase('firebase-heartbeat-database');
		indexedDB.deleteDatabase('firebaseLocalStorageDb');
		window.location.reload();
	}


    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/screens/Favorites/favoritos.css">
                <nav-component></nav-component>
                <div id="morada" class="header-morada"></div>
                <responsive-nav></responsive-nav>
                <img id="favorito" src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/Group%20179.png?raw=true" alt="">
                <img id="favorito2" src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/NewBranch/src/Recursos/Group%20180.png?raw=true" alt="">
                <section id="secCards">
                    <div class="underSec">
                    </div>
                </section>
                <button>Cerrar perfil</button>

            `;
    }
    
}
}

customElements.define('app-favoritos', Favoritos);
export default Favoritos;