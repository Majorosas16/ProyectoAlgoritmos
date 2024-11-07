import { Product } from '../types/product';
import { getProducts } from '../utils/Firebase';
import { getUser } from '../utils/Firebase';
import '../components/ReviewCard/reviewcard'
import ReviewCard from '../components/ReviewCard/reviewcard'
import { Attribute } from '../types/product';


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

        // moviesdata.forEach(element => {
        //     const movieCard = this.ownerDocument.createElement("movie-component") as Movie;
        //     movieCard.setAttribute(Attribute.image, element.images.poster1);
        //     movieCard.setAttribute(Attribute.namemovie, element.name);
        //     movieCard.setAttribute(Attribute.releasedate, `${Number(element.releaseDate.year)}`)
        //     this.arrayMovie.push(movieCard);
        // })
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

            <buttom>Cerrar perfil</buttom>
            `;        

            const secCards = this.shadowRoot.querySelector("#secCards");

            const container = document.createElement('div');
            container.classList.add('containerCards');
            
            if (container) {
                this.arrayMovie.forEach((element) => {
                    container.appendChild(element);
                    secCards?.appendChild(container);
                });
            } else {
                console.error('elements no found');
            }


            if (container) {
                this.arraySeries.forEach((element) => {
                    container.appendChild(element);
                    secCards?.appendChild(container);
                });
            } else {
                console.error('elements no found');
            }
            
        const logoutBtn = this.ownerDocument.createElement('button');
		logoutBtn.innerText = 'Logout';
		logoutBtn.addEventListener('click', this.logout);
		this.shadowRoot?.appendChild(logoutBtn);
            
            
            const review = await getProducts();  //referencia de la data que está en firebase
            const user = await getUser(); //referencia de la data que está en firebase

            review?.forEach((element) => {
                user?.forEach((element2) =>{
                    const reviewCard = this.ownerDocument.createElement("review-component") as ReviewCard;
                    reviewCard.setAttribute(Attribute.imageprofile, element.image);
                    reviewCard.setAttribute(Attribute.user, element.name);
                    movieCard.setAttribute(Attribute.releasedate, `${Number(element.releaseDate.year)}`)
                    this.arrayMovie.push(movieCard); 
                })

            })
        }
    }
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;

// export enum Attribute {
//     "imageprofile" = "imageprofile",
//     "user" = "user",
//     "bio" = "bio",
//     "imagecover" = "imagecover",
//     "titlereview" = "titlereview",
//     "rating" = "rating",
//     "dateadded" = "dateadded",
// }