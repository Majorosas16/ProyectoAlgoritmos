export enum Attribute {
    "image" = "image",
    "namemovie" = "namemovie",
    "releasedate" = "releasedate",
}

class Movie extends HTMLElement {

    image?: string;
    namemovie?: string;
    releasedate?: number;

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.releasedate: //id transform to number to string. All the same in those propieties with number
                this.releasedate = newValue ? Number(newValue) : undefined;
                break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `

            <div class="card-container">
            
            <link rel="stylesheet" href="../src/components/MovieCards/moviecards.css">
                <div class="card">
                <img src="${this.image || 'No image'}" alt="${this.namemovie}">
                </div>

                <div class="info">
                <h1>${this.namemovie || 'No name'}</h1>
                <p>${this.releasedate || 'No date'}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
                </div>

            </div>
            `
        }
    }
}

customElements.define("movie-component", Movie);
export default Movie;