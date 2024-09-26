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
            <h1>For you</h1>
            <h1>Explore</h1>
            </section>

            `;        
            
            const secCards = this.shadowRoot.querySelector("#secCards");
            
            if (secCards) {
                this.arrayMovie.forEach((element) => {
                    secCards.appendChild(element);
                });
            } else {
                console.error('elements no found');
            }
        }
    }
}

customElements.define('app-container', AppContainer);
