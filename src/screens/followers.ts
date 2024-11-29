import '../components/ReviewCard/reviewcard'
import ReviewCard from '../components/ReviewCard/reviewcard'
import { dispatch } from "../store/store";
import { navigate } from "../store/actions"
import "../components/Dashboard/nav"
import "../components/navResponsive/navR"
import '../screens/registro';
import '../screens/dashboard';
import { addObserver, appState } from '../store/store';
import { Screens } from '../types/store';

class Followers extends HTMLElement {

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
               <link rel="stylesheet" href="../src/screens/followers.css">
                <nav-component></nav-component>
                <div id="morada" class="header-morada"></div>
                <responsive-nav></responsive-nav>
                <img id="follower" src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/Group%20181.png?raw=true" alt="">
                <img id="follower2" src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/Group%20182.png?raw=true" alt="">
                <section id="secCards">
                    <div class="underSec">
                    </div>
                </section>
                <button>Cerrar perfil</button>
            `;}
           
            }



            }


customElements.define('app-followers', Followers);
export default Followers;