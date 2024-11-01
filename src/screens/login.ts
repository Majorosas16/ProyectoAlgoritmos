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
			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Login';
			this.shadowRoot.appendChild(title);

			const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Correo electronico';
			pName.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pName);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Contraseña';
			pPrice.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(pPrice);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Iniciar sesión';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);

			const register = this.ownerDocument.createElement('buttom');
			register.innerText = 'Registro';
			register?.addEventListener('click',() =>  {
                dispatch(navigate(Screens.REGISTER))
            });
			this.shadowRoot.appendChild(register);

		}
	}
}

customElements.define('app-login', Login);
export default Login;