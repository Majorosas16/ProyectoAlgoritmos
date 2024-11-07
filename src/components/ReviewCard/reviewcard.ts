import styles from './reviewcard.css'

export enum Attribute {
    "imageprofile" = "imageprofile",
    "user" = "user",
    "bio" = "bio",
    "imagecover" = "imagecover",
    "titlereview" = "titlereview",
    "rating" = "rating",
    "dateadded" = "dateadded",
}

class ReviewCard extends HTMLElement {

    imageprofile?: string;
    user?: string;
    bio?: string;
    imagecover?: string;
    titlereview?: string;
    rating?: number;
    dateadded?: any;

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.rating: //id transform to number to string. All the same in those propieties with number
                this.rating = newValue ? Number(newValue) : undefined;
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

        //Formatear la fecha, para que se muestra en m, s y h
        formatTimeAgo(dateadded:any) {
            if (!dateadded) return "Fecha no disponible";
        
            const now = new Date();
            const date = new Date(dateadded); 
        
            const secondsElapsed = Math.floor((now.getTime() - date.getTime()) / 1000);
        
            if (secondsElapsed < 60) return `hace ${secondsElapsed}   s`;
            if (secondsElapsed < 3600) return `hace ${Math.floor(secondsElapsed / 60)}  m`;
            if (secondsElapsed < 86400) return `hace ${Math.floor(secondsElapsed / 3600)}   h`;
            const daysElapsed = Math.floor(secondsElapsed / 86400);
            return `hace ${daysElapsed}d`;
        }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/ReviewCard/reviewcard.css">

            <div class="card-container">

                <div>
                    <img src="${this.imageprofile || 'No image'}" alt="${this.user}">
                    <p>${this.user || 'No user'}</p>
                    <p>${this.bio || 'No bio'}</p>
                </div>

                <div>
                    <img src="${this.imagecover || 'No image'}" alt="Ops, no image cover">
                    <h1>${this.titlereview || 'No title'}</h1>
                    <p>See full review</p>
                </div>

                <div class="iconsAndText">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                    <p>${this.rating} rating</p>
                    </div>

                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>
                    <p class="dateadded">${this.formatTimeAgo(this.dateadded)}</p>
                    </div>
                </div>

                <div id= "likeIcon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>
                   <p>2000</p>
                </div>
    

                <div id="iconCard">
                    <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
                </div>
            </div>
            `;
    
            const likeIcon = this.shadowRoot.querySelector('#likeIcon svg');
    
            //falta el contador
            likeIcon?.addEventListener('click', () => {
                const currentFill = likeIcon.getAttribute('fill');
                if (currentFill === '#4C248A') {
                    likeIcon.setAttribute('fill', 'gray');
                } else {
                    likeIcon.setAttribute('fill', '#4C248A');
                }
            });

            const iconCard = this.shadowRoot.querySelector('#iconCard svg');
    
            //falta el contador
            iconCard?.addEventListener('click', () => {
                const currentFill = iconCard.getAttribute('fill');
                if (currentFill === '#4C248A') {
                    iconCard.setAttribute('fill', 'gray');
                } else {
                    iconCard.setAttribute('fill', '#4C248A');
                }
            });
        }

        const cssReview = this.ownerDocument.createElement("style");
        cssReview.innerHTML = styles;
        this.shadowRoot?.appendChild(cssReview);
    }
}    

customElements.define("review-component", ReviewCard);
export default ReviewCard;