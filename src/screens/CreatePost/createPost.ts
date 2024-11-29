import { addProduct, uploadFile, getFile, getUser } from "../../utils/Firebase";
import { review } from "../../types/product";
import { addObserver, appState, dispatch } from "../../store/store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { Product } from "../../types/product";

const product: Product = { 
    user: '',
    bio: '',
    imagecover: '',
    titlereview: '',
    rating: '',
    name :'',
    review: ''

}

export enum Attribute {
    // "imageprofile" = "imageprofile",
    "user" = "user",
    "bio" = "bio",
    "imagecover" = "imagecover",
    "titlereview" = "titlereview",
    "rating" = "rating",
    "dateadded" = "dateadded",
    "name" ="name",
    "review"="review"
}

class CreatePost extends HTMLElement {
    imageprofile?: string;
    user?: string;
    bio?: string;
    imagecover?: string;
    titlereview?: string;
    rating?: number;
    name?:string;
    review?:string;
    selectedFile?: File;


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this)
    }

    async connectedCallback() {
        const userId = appState.user; 
        const userData = await getUser(userId);
        if (userData) {
            this.name = userData.name;
            this.bio=userData.bio;
        }

        this.render();
    }
    changeTitle(e:any) {
        //capturar el valor del input
        product.titlereview = e.target.value;
    }

    changeName(e: any) {
        //capturar el valor del input
        product.name = e.target.value;   
    }

    changeRating(e: any) {
     //capturar el valor del input
     product.rating = e.target.value;      
    }

    changeReview(e: any) {
    //capturar el valor del input
     product.review = e.target.value; 
    }
    
    async submitForm() {
        const img = this.shadowRoot?.querySelector('#photo') as HTMLInputElement;
        const file = img?.files?.[0]; 
        console.log(file);
        
        
        if (file) {
            console.log('que Pasa?');
            const uniqueFileName = await uploadFile(file, appState.user); 
            const imageUrl: string | null = await getFile(String(uniqueFileName)); 
            
            if (imageUrl) {
                product.imagecover = imageUrl; 
                dispatch(navigate(Screens.DASHBOARD))
            } else {
                console.error("No se pudo obtener la URL de la imagen.");
                alert("Error al obtener la URL de la imagen. Por favor intenta de nuevo.");
                return; 
            }
    
        await addProduct(product);
    
        alert('Post creado');
        
      
    }else{
    console.log('ves que no va?');
    
}
    }

   render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/screens/createPost.css">
            <nav-component></nav-component>
            <responsive-nav></responsive-nav>
            <section class="container">
                    <h1 class="titulo">Create a Review</h1>
                    <div id="Form">
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
                    </div>
                    
                    
            </section>
               
                `;
            
            //Eventos a cada input y botón, llamo la función que cambia el estado
            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
            buttonSubmit.addEventListener('click', this.submitForm.bind(this));

            const title = this.shadowRoot?.querySelector("#title") as HTMLInputElement;
            title.addEventListener('change', this.changeTitle);
            title.required

            const name = this.shadowRoot?.querySelector("#name") as HTMLInputElement;
            name.addEventListener('change', this.changeName);
            name.required

            const rating = this.shadowRoot?.querySelector("#rating") as HTMLInputElement;
            rating.addEventListener('change', this.changeRating);
            rating.required

            const imgInput = this.shadowRoot?.querySelector('#photo') as HTMLInputElement;
        imgInput?.addEventListener('change', () => {
            this.selectedFile = imgInput.files?.[0] || undefined;
        });
       imgInput.required

            const review = this.shadowRoot?.querySelector("#review") as HTMLInputElement;
            review.addEventListener('change', this.changeReview);
            review.required

        }

    }
}

customElements.define('create-post', CreatePost);
export default CreatePost;