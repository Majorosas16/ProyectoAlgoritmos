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

            <div>
                <div id="card">
                <img src="${this.image || 'No image'}" alt="${this.namemovie}">
                </div>

                <div id="txt">
                <h1>${this.namemovie || 'No name'}</h1>
                <p>${this.releasedate || 'No date'}</p>
                </div>

            </div>
            `
        }
    }
}

customElements.define("movie-component", Movie);
export default Movie;