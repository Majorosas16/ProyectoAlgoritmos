import { Product } from '../types/product';
import { getProducts } from '../utils/Firebase';
import { getUser } from '../utils/Firebase';
import '../components/ReviewCard/reviewcard'
import ReviewCard from '../components/ReviewCard/reviewcard'
import { Attribute } from '../types/product';
import { credentials } from '../types/product';
import { review } from '../types/product';


import * as components from "../components/indexPadre";
import "../components/Dashboard/nav"
import "../components/navResponsive/navR"
import "../components/Carrusel/carrusel"


import '../screens/registro';
import '../screens/dashboard';
import { addObserver, appState } from '../store/store';
import { Screens } from '../types/store';

class Dashboard extends HTMLElement {

	arrayReview: ReviewCard[] = [];

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


    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/styles.css">

            <nav-component></nav-component>
            <responsive-nav></responsive-nav>
    
            <section class="secCarousel">
                <carousel-component></carousel-component>
            </section>

            <section id="secCards">
                <div class="underSec">
                    <h1 class="fyp">For you</h1>
                    <h1 class="xplore">Explore</h1>
                </div>
            </section>

            
            `;      
            
            const logoutBtn = this.ownerDocument.createElement('button');
            logoutBtn.innerText = 'Log out';
            logoutBtn.addEventListener('click', this.logout);
            this.shadowRoot?.appendChild(logoutBtn);

            const secCards = this.shadowRoot.querySelector("#secCards");

            const container = document.createElement('div');
            container.classList.add('containerCards');
            
            
        const review = await getProducts();  //referencia de la data que está en firebase
        const user = await getUser(); //referencia de la data que está en firebase

        review?.forEach((elementReview) => {
            user?.forEach((elementUser) =>{
                const reviewCard = this.ownerDocument.createElement("review-component") as ReviewCard;
                reviewCard.setAttribute(Attribute.imageprofile, elementUser.image);
                reviewCard.setAttribute(Attribute.user, elementUser.name);
                reviewCard.setAttribute(Attribute.bio, elementUser.bio);
                reviewCard.setAttribute(Attribute.imagecover, elementReview.image);
                reviewCard.setAttribute(Attribute.titlereview, elementReview.title);
                reviewCard.setAttribute(Attribute.rating, elementReview.rating);
                reviewCard.setAttribute(Attribute.dateadded, elementReview.dateadded);
                this.arrayReview.push(reviewCard); 
            })

        })
        if (container) {
            this.arrayReview.forEach((element) => {
                container.appendChild(element);
                secCards?.appendChild(container);
            });
        } else {
            console.error('elements no found');
        }
            

        }
    }
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;