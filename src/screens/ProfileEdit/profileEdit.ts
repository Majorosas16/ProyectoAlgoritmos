import '../../components/ReviewCard/reviewcard'
import { ReviewCard } from '../../components/indexPadre';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import "../../components/Dashboard/nav"
import "../../components/navResponsive/navR"
import '../../screens/Register/registro';
import '../Dashboard/dashboard';
import { addObserver, appState } from '../../store/store';
import { uploadFileProfile, getFilePerfil, getFile } from '../../utils/Firebase';

class PerfilEdit extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        addObserver(this);
    }

    logout() {
        indexedDB.deleteDatabase('firebase-heartbeat-database');
        indexedDB.deleteDatabase('firebaseLocalStorageDb');
        window.location.reload();
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="../src/screens/ProfileEdit/profileEdit.css">
                <nav-component></nav-component>
                <section class="contenedor">
                <div class="profile-container">
                    <!-- Imagen de perfil y botón para cambiar imagen -->
                    <img class="profile-img" alt="Profile Picture" />
                    <input class="file-input" type="file" style="display: none;" />
                    <button class="change-image-btn">Change Image</button>

                    <!-- Formulario de datos del usuario -->
                    <div class="form-container">
                        <label for="name">Name</label>
                        <input id="name" class="name-input" type="text" />

                        <label for="username">Username</label>
                        <input id="username" class="username-input" type="text" />

                        <label for="email">Email</label>
                        <input id="email" class="email-input" type="email" />

                        <label for="bio">Change biography</label>
                        <textarea id="bio" class="bio-input"></textarea>

                        <label for="password">Change Password</label>
                        <input id="password" class="password-input" type="password" placeholder="****" />

                        <button class="save-btn">Save</button>
                    </div>
                </div>
                </section>
                
            `;
        }

        const fileInput = this.shadowRoot?.querySelector('.file-input') as HTMLInputElement;
        const changeImageBtn = this.shadowRoot?.querySelector('.change-image-btn') as HTMLButtonElement;
        const profileImg = this.shadowRoot?.querySelector('.profile-img') as HTMLImageElement;

        const nameInput = this.shadowRoot?.querySelector('.name-input') as HTMLInputElement;
        const usernameInput = this.shadowRoot?.querySelector('.username-input') as HTMLInputElement;
        const emailInput = this.shadowRoot?.querySelector('.email-input') as HTMLInputElement;
        const bioInput = this.shadowRoot?.querySelector('.bio-input') as HTMLTextAreaElement;
        const passwordInput = this.shadowRoot?.querySelector('.password-input') as HTMLInputElement;
        const saveBtn = this.shadowRoot?.querySelector('.save-btn') as HTMLButtonElement;

       
        const urlImg = await getFilePerfil(appState.user);
        if (urlImg) profileImg.src = urlImg;

// Cambiar imagen
changeImageBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target?.result) {
                profileImg.src = event.target.result as string;
            }
        };
        reader.readAsDataURL(file);

        try {
            await uploadFileProfile(file, appState.user);
            alert('Imagen de perfil actualizada exitosamente.');
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            alert('Hubo un problema al guardar la imagen. Intenta nuevamente.');
        }
    }
});

saveBtn.addEventListener('click', async () => {
    const updatedUser = {
        name: nameInput.value,
        username: usernameInput.value,
        email: emailInput.value,
        bio: bioInput.value,
        password: passwordInput.value, 
    };

    try {
        console.log('Datos actualizados:', updatedUser);
        alert('Datos guardados exitosamente.');
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        alert('Hubo un problema al guardar los cambios. Intenta nuevamente.');
    }
});
}
}

customElements.define('app-profiledit', PerfilEdit);
export default PerfilEdit;