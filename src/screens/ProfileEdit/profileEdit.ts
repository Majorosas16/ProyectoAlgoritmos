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

class PerfilEdit extends HTMLElement {

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
                <link rel="stylesheet" href="../src/screens/profileEdit.css">
                <nav-component></nav-component>
                <body>
                <section class="contenedor">
                <div class="img-perfil"></div>
                <div class="inputs">
                    <div class="inputs-name">
                    <a>Name</a>
                    <input type="text" placeholder="Name" class="name">
                    </div>

                    <div class="inputs-username">
                    <a>Username</a>
                    <input type="text" placeholder="Username" class="username">
                    </div>

                    <div class="inputs-email">
                    <a>Email</a>
                    <input type="email" placeholder="Email" class="email">
                    </div>

                    <div class="inputs-bio">
                    <a>Change biography</a>
                    <input type="text" placeholder="Biography: “Superhero Fan”" class="bio">
                    </div>

                    <div class="inputs-password">
                    <a>Change password</a>
                    <input type="password" placeholder="Password" class="password">
                    </div>
                    <div class="guardar">
                    <button>Save</button>
                    </div>
				</div>
                </section>
                </body>
                
            `;}
        
            }
}


customElements.define('app-profiledit', PerfilEdit);
export default PerfilEdit;