import '../../components/ReviewCard/reviewcard'
import { ReviewCard } from '../../components/indexPadre';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import "../../components/Dashboard/nav"
import "../../components/navResponsive/navR"
import '../../screens/Register/registro';
import '../Dashboard/dashboard';
import { addObserver, appState } from '../../store/store';
import { Screens } from '../../types/store';

class Perfil extends HTMLElement {

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
                <link rel="stylesheet" href="../src/screens/favoritos.css">
                <nav-component></nav-component>
                <div id="frente" class="frente-perfil">
                <h1>Profile</h1>
                <button id="edit">
                Edit 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
                </button>
                </div>
                <div class="cuadroGrandeP"></div>
                <div class="botones">
                <button id="favorito" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
Your favorites
</button>
                <button id="seguidores"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
Your follows
</button>
                </div>
                <responsive-nav></responsive-nav>
                <section id="secCards">
                    <div class="underSec">
                    </div>
                </section>
                <button>Cerrar perfil</button>
            `;}
           

            const buttonFavorites = this.shadowRoot?.querySelector("#favorito")as HTMLButtonElement;
            buttonFavorites.addEventListener('click', () => {
                console.log("Profile clicked");
                dispatch(navigate(Screens.FAVORITOS)); 
            });

            const buttonFollowers = this.shadowRoot?.querySelector("#seguidores")as HTMLButtonElement;
            buttonFollowers.addEventListener('click', () => {
                console.log("Profile clicked");
                dispatch(navigate(Screens.FOLLOWS)); 
            });

            const buttonEdit = this.shadowRoot?.querySelector("#edit")as HTMLButtonElement;
            buttonEdit.addEventListener('click', () => {
                console.log("Profile clicked");
                dispatch(navigate(Screens.PROFILEEDIT)); 
            });


            }
}


customElements.define('app-perfil', Perfil);
export default Perfil;