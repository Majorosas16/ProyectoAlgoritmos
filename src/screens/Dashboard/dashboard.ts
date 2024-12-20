import { Product } from '../../types/product';
import '../../components/ReviewCard/reviewcard'
import ReviewCard from '../../components/ReviewCard/reviewcard';
import { Attribute2 } from '../../types/product';
import { credentials } from '../../types/product';
import { review } from '../../types/product';
import { getUser } from '../../utils/Firebase';
import { getFile } from '../../utils/Firebase';
import { getProducts } from '../../utils/Firebase';
import { AppState } from '../../types/store';
import '../CreatePost/createPost';


import '../../components/Dashboard/nav'
import * as components from "../../components/indexPadre";
import '../../components/navResponsive/navR'


import '../Register/registro'
import { addObserver, appState } from '../../store/store';
import { Screens } from '../../types/store';

class Dashboard extends HTMLElement {

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
                <link rel="stylesheet" href="../src/styles.css">
                <nav-component></nav-component>
                <responsive-nav></responsive-nav>
                <create-post></create-post>

            `;
    
            const secCards = this.shadowRoot.querySelector("#secCards");
            const container = document.createElement('div');
            container.classList.add('containerCards');
            
            // const logoutBtn = this.ownerDocument.createElement('button');
            // logoutBtn.innerText = 'Logout';
            // logoutBtn.addEventListener('click', this.logout);
            // this.shadowRoot?.appendChild(logoutBtn);
            
            const reviews = await getProducts();  // referencia de la data de reviews en Firebase
            const user = await getUser(appState.user); // referencia de la data de usuarios en Firebase

            const userId = appState.user;
            
        if (userId) {
            const userData = await getUser(userId);
        }
        
        for (const review of reviews || []) {
            let bio = '';
            let name = '';

            console.log(review);
            
            if (review.userUid) {
                const userDataPost = await getUser(review.userUid);
                
                name = userDataPost?.name || '';
                bio = userDataPost?.bio || '';
            }
           
                        
            const reviewCard = this.ownerDocument.createElement("review-component") as ReviewCard;
            reviewCard.setAttribute(Attribute2.user, name);
            reviewCard.setAttribute(Attribute2.bio, bio);
            reviewCard.setAttribute(Attribute2.imagecover, review.imagecover);
            reviewCard.setAttribute(Attribute2.titlereview, review.name);
            reviewCard.setAttribute(Attribute2.rating, review.rating);
            reviewCard.setAttribute(Attribute2.dateadded, review.dateadded);
            this.arrayReview.push(reviewCard); 

    
            if (container) {
                this.arrayReview.forEach((element) => {
                    container.appendChild(element);
                    secCards?.appendChild(container);
                });
            } else {
                console.error('elements not found');
            }
        }
    }
    
}
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;