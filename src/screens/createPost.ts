import { addProduct } from "../utils/Firebase";

const review = { //dummie o esta inicial
    title: '',
    name: '',
    rating: 1,
    image: '',
    review: ''
}

class CreatePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    changeTitle(e:any) {
        //capturar el valor del input
        review.title = e.target.value;
    }

    changeName(e: any) {
        //capturar el valor del input
        review.name = e.target.value;   
    }

    changeRating(e: any) {
     //capturar el valor del input
     review.rating = e.target.value;      
    }
    changeImage(e: any) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            review.image = reader.result as string;
        };
        if (file) {
            reader.readAsDataURL(file);
        };
    }

    changeReview(e: any) {
    //capturar el valor del input
     review.review = e.target.value; 
    }

    submitForm(e: any) {
        addProduct(review); // enviar las los value a la data
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <h1>Create a Review</h1>
                    
                    <form id="Form">
                    <p>Title</p>
                    <input id="title" type="text" required placeholder="Holy crap! that movie was...">
                    <p>Movie, Serie, Documentary</p>
                    <input id="name" type="text" required placeholder="The Substance">
                    <p>Rating</p>
                    <input type="number" id="rating" name="rating" min="1" max="5" step="0.5">
                    <p>Upload a image</p>
                    <input type="file" id="photo" accept="image/*">
                    <p>Review</p>
                    <input id="review" type="text" required placeholder="Is your turn">
                    <button id="submitButton">Publish</button>
                    </form>
                `;
            
            //Eventos a cada input y botón, llamo la función que cambia el estado
            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
            buttonSubmit.addEventListener('click', this.submitForm);

            const title = this.shadowRoot?.querySelector("#title") as HTMLInputElement;
            title.addEventListener('change', this.changeTitle);
            title.required

            const name = this.shadowRoot?.querySelector("#name") as HTMLInputElement;
            name.addEventListener('change', this.changeName);
            name.required

            const rating = this.shadowRoot?.querySelector("#rating") as HTMLInputElement;
            rating.addEventListener('change', this.changeRating);
            rating.required

            const songImage = this.shadowRoot?.querySelector("#photo") as HTMLInputElement;
            songImage.addEventListener('change', this.changeImage.bind(this));
            songImage.required

            const review = this.shadowRoot?.querySelector("#review") as HTMLInputElement;
            review.addEventListener('change', this.changeReview);
            review.required

        }

    }
}

customElements.define('createpost-component', CreatePost);