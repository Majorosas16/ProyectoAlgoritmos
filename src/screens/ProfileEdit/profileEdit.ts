import '../../components/ReviewCard/reviewcard'
import { ReviewCard } from '../../components/indexPadre';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import "../../components/Dashboard/nav"
import "../../components/navResponsive/navR"
import '../../screens/Register/registro';
import '../Dashboard/dashboard';
import { addObserver, appState } from '../../store/store';
import { uploadFileProfile, getFilePerfil, getFile } from '../../utils/Firebase';

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

    // changeImage(event: any) {
    //     console.log(event);
    // } 

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
                
            `;}

            const pImage = this.ownerDocument.createElement('input');
            pImage.type = 'file';
            pImage?.addEventListener('change', () => {
                const file = pImage.files?.[0];
                if (file) uploadFileProfile(file, appState.user)
            } );
            this.shadowRoot?.appendChild(pImage);

            const urlImg = await getFilePerfil(appState.user);
            const profileImg = this.ownerDocument.createElement('img');
            profileImg.src = String(urlImg);
            this.shadowRoot?.appendChild(profileImg);
            }
}


customElements.define('app-profiledit', PerfilEdit);
export default PerfilEdit;