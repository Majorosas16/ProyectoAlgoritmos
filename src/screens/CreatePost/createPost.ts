import { addProduct, uploadFile, getFile, getUser } from "../../utils/Firebase";
import { review } from "../../types/product";
import { addObserver, appState, dispatch } from "../../store/store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { Product } from "../../types/product";
import '../../components/ReviewCard/reviewcard'
import ReviewCard from '../../components/ReviewCard/reviewcard';
import { Attribute2 } from '../../types/product';
import { getProducts } from '../../utils/Firebase';



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
    "name" ="name",
    "review"="review"
}

class CreatePost extends HTMLElement {

    arrayReview: ReviewCard[] = [];

    // imageprofile?: string;
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
        await addProduct(product);
        alert('Post creado');

    //     if (file) {
    //         console.log('que Pasa?');
    //         const uniqueFileName = await uploadFile(file, appState.user);
    //         const imageUrl: string | null = await getFile(String(uniqueFileName));

    //         if (imageUrl) {
    //             product.imagecover = imageUrl;
    //             dispatch(navigate(Screens.DASHBOARD))
    //         } else {
    //             console.error("No se pudo obtener la URL de la imagen.");
    //             alert("Error al obtener la URL de la imagen. Por favor intenta de nuevo.");
    //             return;
    //         }


    // }else
    {

}
    }

   async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/screens/CreatePost/createPost.css">
            <link rel="stylesheet" href="../src/styles.css">

            <section class="container">
                    <h1 class="titulo">Everything starts with a review</h1>

                    <div id="Form">

                        <div class="organize">

                            <div class="left">
                                <p>Title</p>
                                <input id="title" type="text" required placeholder="Holy crap! that movie was...">
                                <p>Movie, Serie, Documentary</p>
                                <input id="name" type="text" required placeholder="The Substance">
                                <p>Rating</p>
                                <input type="number" id="rating" name="rating" min="1" max="5" step="0.5">
                                <p>Upload a image</p>
                                <input type="file" id="photo" accept="image/*">
                            </div>

                            <div class="right">
                             <textarea id="review" required placeholder="Is your turn"></textarea>
                            </div>

                        </div>

                        <button id="submitButton">Publish</button>

                    </div>


            </section>

                    <section id="secCards">
                        <div class="underSec"></div>
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
                const file = imgInput.files?.[0];
                if (file) uploadFile(file, appState.user);});
            imgInput.required

            const review = this.shadowRoot?.querySelector("#review") as HTMLInputElement;
            review.addEventListener('change', this.changeReview);
            review.required
        }
       //

       const container = document.createElement('div');
       container.classList.add('containerCards');

       const reviews = await getProducts();  // referencia de la data de reviews en Firebase
       const user = await getUser(appState.user); // referencia de la data de usuarios en Firebase

       const userId = appState.user;

       if (userId) {
        const userData = await getUser(userId);
    }
    
       for (const review of reviews || []) {
        let bio = '';
        let name = '';

        console.log(review);
        
        if (review.userUid) {
            const userDataPost = await getUser(review.userUid);
            
            name = userDataPost?.name || '';
            bio = userDataPost?.bio || '';
           }
           
        const secCards = this.shadowRoot?.querySelector("#secCards");
        const urlImg = await getFile(appState.user);
        const postImg = this.ownerDocument.createElement('img');
 
        const reviewCard = this.ownerDocument.createElement("review-component") as ReviewCard;
        reviewCard.setAttribute(Attribute2.user, name);
        reviewCard.setAttribute(Attribute2.bio, bio);
        reviewCard.setAttribute(Attribute2.imagecover, postImg.src = String(urlImg));
        reviewCard.setAttribute(Attribute2.titlereview, review.name);
           reviewCard.setAttribute(Attribute2.rating, String(review.rating));
           reviewCard.setAttribute(Attribute2.dateadded, review.dateadded);
        this.arrayReview.push(reviewCard); 
 
        
        if (secCards) {
         this.arrayReview.forEach((element) => {
            container.appendChild(element);
            secCards?.appendChild(container);
         });
     } else {
         console.error('elements not found');
        }
       }
       
       
    //    if (secCards) {
    //        secCards.appendChild(document.createTextNode(this.title));
    //        secCards.appendChild(document.createTextNode(this.name ?? ""));        
    //        secCards.appendChild(document.createTextNode(String(this.rating ?? '')));
    //        secCards.appendChild(postImg);   
    //        secCards.appendChild(document.createTextNode(this.review ?? ""));   
    //        this.shadowRoot?.appendChild(secCards);
    //    }
    }
}

customElements.define('create-post', CreatePost);
export default CreatePost;