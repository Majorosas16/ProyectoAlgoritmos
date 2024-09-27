import Movie, { Attribute } from "./components/MovieCards/moviecards";
import * as components from "./components/indexPadre";
import "./components/Dashboard/nav"
import "./components/Carrusel/carrusel"
import { moviesdata } from "./data/moviesdata";
import { seriesdata } from "./data/seriesdata";

class AppContainer extends HTMLElement{

    arrayMovie: Movie[] = [];

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
    }


    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/styles.css">

            <nav-component></nav-component>
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

            
        }
    }
}

customElements.define('app-container', AppContainer);
