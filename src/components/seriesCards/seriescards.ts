export enum Attribute2 {
    "image" = "image",
    "namemovie" = "namemovie",
    "seasons" = "seasons",
    "releasedate" = "releasedate",
}

class Series extends HTMLElement {

    image?: string;
    namemovie?: string;
    releasedate?: number;
    seasons?: number;

    static get observedAttributes(){
        return Object.keys(Attribute2);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName:Attribute2,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute2.releasedate: //id transform to number to string. All the same in those propieties with number
                this.releasedate = newValue ? Number(newValue) : undefined;
                break;
            
            case Attribute2.seasons: //id transform to number to string. All the same in those propieties with number
                this.seasons = newValue ? Number(newValue) : undefined;
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
            
                <link rel="stylesheet" href="../src/components/seriesCards/seriescard.css">
                <div class="card">
                <img src="${this.image || 'No image'}" alt="${this.namemovie}">
                </div>

                <div class="info">
                <h1>${this.namemovie || 'No name'}</h1>
                <p> Seasons: ${this.seasons || 'No seasons'}</p>
                <p> Release: ${this.releasedate || 'No date'}</p>

                    <div id="iconCard"">
                        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                    </div>

            </div>
            `
            const heartIcon = this.shadowRoot.querySelector('#iconCard svg');

            heartIcon?.addEventListener('click', () => {
                const currentFill = heartIcon.getAttribute('fill');
                if (currentFill === '#4C248A') {
                    heartIcon.setAttribute('fill', 'gray');
                } else {
                    heartIcon.setAttribute('fill', '#4C248A');
                }
            });
        }
    }
}

customElements.define("serie-component", Series);
export default Series;