import { dispatch } from '../store/store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';
import { loginUser } from '../utils/Firebase';

const credentials = {
	email: '',
	password: '',
};

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		credentials.email = e.target.value;
	}

	changePassword(e: any) {
		credentials.password = e.target.value;
	}

	submitForm() {
		loginUser(credentials.email, credentials.password);
		window.location.reload();
	}

	async render() {

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/screens/loginStyle.css">
				<section class="container">
        			<div class="img-logo">
					
					</div>
    			</section>
			`;

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Login';
			title.className = 'titulo';
			this.shadowRoot.appendChild(title);

			const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Correo electronico';
			pName.className = 'email';
			pName.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pName);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Contraseña';
			pPrice.className = 'password';
			pPrice.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(pPrice);

			const forgot = this.ownerDocument.createElement('a');
			forgot.innerText = 'Forgot password?';
			forgot.className = 'forgot';
			forgot.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(forgot);

			const save2 = this.ownerDocument.createElement('button');
			save2.innerText = '';
			save2.className = 'save2';
			save2.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(save2);

			const save3 = this.ownerDocument.createElement('a');
			save3.innerText = 'Remember me';
			save3.className = 'save3';
			save3.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(save3);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Iniciar sesión';
			save.className = 'iniciarSesion';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);

			const register = this.ownerDocument.createElement('button');
			register.innerText = 'Registro';
			register.className = 'registro';
			register?.addEventListener('click',() =>  {
                dispatch(navigate(Screens.REGISTER))
            });
			this.shadowRoot.appendChild(register);

			const contINER = this.shadowRoot?.querySelector('.botoncito') as HTMLElement;
			contINER?.appendChild(save3)
			contINER?.appendChild(save2)
			this.shadowRoot.appendChild(contINER);


		}
	}
}

customElements.define('app-login', Login);
export default Login;