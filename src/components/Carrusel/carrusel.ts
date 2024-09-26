class Carousel extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

            <section class="carousel">
            <div class="atras">
             <img id="atras" src="src/Recursos/Flecha (1).svg" alt="atras" loading="lazy">
            </div>
            
            <div class="imagenes">
            <div id="img">
             <img id="img" src="src/Recursos/GOT.webp" alt="img" loading="lazy">
            </div>
            </div>

             <div id="texto" class="texto"></div>

             <div class="adelante" id="adelante" >
             <img src="src/Recursos/Flecha (2).svg" alt="adelante" loading="lazy">
            </div>

            <div class="puntos" id="puntos"></div>

            </section>
              
            `;
        }
    }
}

customElements.define('carousel-component', Carousel);
export default Carousel;