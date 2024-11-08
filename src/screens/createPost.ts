import { addProduct, uploadFile } from "../utils/Firebase";
import { review } from "../types/product";
import { addObserver, appState, dispatch } from "../store/store";
import { navigate } from '../store/actions';
import { Screens } from '../types/store';

class CreatePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this)
    }

    connectedCallback() {
        this.render();
        alert("CREATE A POST")
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

    changeReview(e: any) {
    //capturar el valor del input
     review.review = e.target.value; 
    }
    
    submitForm(e: any) {

        addProduct(review); // enviar las los value a la data
        dispatch(navigate(Screens.FORMREVIEW));
    }

   render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/screens/createPost.css">
            <responsive-nav></responsive-nav>
            <section class="container">
                    <h1 class="titulo">Create a Review</h1>
                    <form id="Form">
                    <p>Title</p>
                    <input id="title" type="text" required placeholder="Holy crap! that movie was...">
                    <p>Movie, Serie, Documentary</p>
                    <input id="name" type="text" required placeholder="The Substance">
                    <p>Rating</p>
                    <input type="number" id="rating" name="rating" min="1" max="5" step="0.5">
                    <p>Upload a image</p>
                    <input type="file" id="photo" accept="image/*">
                    <input id="review" type="text" required placeholder="Is your turn">
                    <button id="submitButton">Publish</button>
                    </form>
            </section>
               
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

            const image = this.shadowRoot?.querySelector("#photo") as HTMLInputElement;
            image.addEventListener('change', () =>{
                console.log(image.files?.[0]);
                const file = image.files?.[0];
                
                if(file) uploadFile (file,appState.user);
            });
            image.required

            const review = this.shadowRoot?.querySelector("#review") as HTMLInputElement;
            review.addEventListener('change', this.changeReview);
            review.required

        }

    }
}

customElements.define('create-post', CreatePost);
export default CreatePost;