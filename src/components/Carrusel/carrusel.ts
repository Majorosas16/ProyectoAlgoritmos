import { imagenesCarrusel } from "../../data/imagenesCarrusel";

class Carousel extends HTMLElement {
    
    actual: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.actual = 0; // Índice actual de la imagen en el carrusel
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/Carrusel/carrusel.css">

                <section class="carousel">
                    <div class="atras">
                        <img id="atras" src="https://raw.githubusercontent.com/Majorosas16/ProyectoAlgoritmos/refs/heads/FirstDelivery/src/Recursos/Flecha%20(2).svg" alt="atras" loading="lazy">
                    </div>
                    
                    <div class="imagenes">
                        <img id="imgCarrusel" src="${imagenesCarrusel[0].url}" alt="img" loading="lazy">
                    </div>

                    <div id="texto" class="texto"></div>

                    <div class="adelante" id="adelante">
                        <img src="https://raw.githubusercontent.com/Majorosas16/ProyectoAlgoritmos/refs/heads/FirstDelivery/src/Recursos/Flecha%20(1).svg" alt="adelante" loading="lazy">
                    </div>

                    <div class="puntos" id="puntos"></div>
                </section>
            `;

           
            let atras = this.shadowRoot?.getElementById('atras');
            let adelante = this.shadowRoot?.getElementById('adelante');
            let imgElement = this.shadowRoot?.getElementById('imgCarrusel') as HTMLImageElement;
            let puntos = this.shadowRoot?.getElementById('puntos');

            // Inicializa el carrusel con los puntos
            this.posicionCarrusel(puntos);

            // Evento para retroceder
            atras?.addEventListener('click', () => {
                this.actual = (this.actual - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
                imgElement.src = imagenesCarrusel[this.actual].url;
                this.posicionCarrusel(puntos);
            });

            // Evento para avanzar
            adelante?.addEventListener('click', () => {
                this.actual = (this.actual + 1) % imagenesCarrusel.length;
                imgElement.src = imagenesCarrusel[this.actual].url;
                this.posicionCarrusel(puntos);
            });
        }
    }

    // Función para mostrar y actualizar los puntos del carrusel
    posicionCarrusel(puntos: HTMLElement | null) {
        if (puntos) {
            puntos.innerHTML = '';  
            for (let i = 0; i < imagenesCarrusel.length; i++) {
                if (i === this.actual) {
                    puntos.innerHTML += '<span class="punto bold">•</span>';
                } else {
                    puntos.innerHTML += '<span class="punto">•</span>';  
                }
            }
        }
    }
}

customElements.define('carousel-component', Carousel);
export default Carousel;
