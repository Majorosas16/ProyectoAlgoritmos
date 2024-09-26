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

            <link rel="stylesheet" href="../src/components/Carrusel/carrusel.css">

            <body>
            <section class="carousel">
            <div class="atras">
             <img id="atras" src="https://raw.githubusercontent.com/Majorosas16/ProyectoAlgoritmos/refs/heads/FirstDelivery/src/Recursos/Flecha%20(2).svg" alt="atras" loading="lazy">
            </div>
            
            <div class="imagenes">
            <div id="img">
             <img id="img" src="https://raw.githubusercontent.com/Majorosas16/ProyectoAlgoritmos/refs/heads/FirstDelivery/src/Recursos/Batman%20(1).webp" width="3000" alt="img" loading="lazy">

            </div>
            </div>

             <div id="texto" class="texto"></div>

             <div class="adelante" id="adelante" >
             <img src="https://raw.githubusercontent.com/Majorosas16/ProyectoAlgoritmos/refs/heads/FirstDelivery/src/Recursos/Flecha%20(1).svg"  alt="adelante" loading="lazy">
            </div>

            <div class="puntos" id="puntos"></div>

            </section>
            </body>
            
              
            `;
        }
    }
}

customElements.define('carousel-component', Carousel);
export default Carousel;