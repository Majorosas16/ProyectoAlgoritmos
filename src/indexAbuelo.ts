import Movie, { Attribute } from "./components/MovieCards/moviecards";
import Series, { Attribute2 } from "./components/seriesCards/seriescards";
import * as components from "./components/indexPadre";
import "./components/Dashboard/nav"
import "./components/navResponsive/navR"
import "./components/Carrusel/carrusel"
import { moviesdata } from "./data/moviesdata";
import { seriesdata } from "./data/seriesdata";
import '../src/screens/registro';
import './screens/dashboard';
import { addObserver, appState } from './store/store';
import { Screens } from './types/store';

class AppContainer extends HTMLElement{

    arrayMovie: Movie[] = [];
    arraySeries: Series[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        moviesdata.forEach(element => {
            const movieCard = this.ownerDocument.createElement("movie-component") as Movie;
            movieCard.setAttribute(Attribute.image, element.images.poster1);
            movieCard.setAttribute(Attribute.namemovie, element.name);
            movieCard.setAttribute(Attribute.releasedate, `${Number(element.releaseDate.year)}`)
            this.arrayMovie.push(movieCard);
        })
        // console.log(this.arrayMovie);

        seriesdata.forEach(element => {
            const serieCard = this.ownerDocument.createElement("serie-component") as Series;
            serieCard.setAttribute(Attribute2.image, element.images.poster1);
            serieCard.setAttribute(Attribute2.namemovie, element.name);
            serieCard.setAttribute(Attribute2.seasons, `${Number(element.seasons)}`);
            serieCard.setAttribute(Attribute2.releasedate, `${Number(element.releaseDateFirstEpisode.year)}`);
            this.arraySeries.push(serieCard);
        })

        // console.log(this.arrayMovie);

    }


    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/styles.css">

            <app-register></app-register>
            <nav-component></nav-component>
            <responsive-nav></responsive-nav>
            <app-dashboard></app-dashboard>
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
            
            switch (appState.screen) {
				case Screens.REGISTER:
					const register = this.ownerDocument.createElement('app-register');
					this.shadowRoot.appendChild(register);
					break;

				case Screens.DASHBOARD:
					const dashboard = this.ownerDocument.createElement('app-dashboard');
					this.shadowRoot.appendChild(dashboard);
					break;

				default:
					break;
			}
            
        }
    }

    
}

customElements.define('app-container', AppContainer);
