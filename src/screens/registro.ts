import { dispatch } from '../store/store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';
import { registerUser } from '../utils/Firebase';

const credentials = {
	email: '',
	password: '',
	name: '',
	age: '',
};

class Register extends HTMLElement {
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

	changeName(e: any) {
		credentials.name = e.target.value;
	}

	changeAge(e: any) {
		credentials.age = e.target.value;
	}

	async submitForm() {
		const resp = await registerUser(credentials);
		resp ? dispatch(navigate(Screens.LOGIN)) : alert('No se pudo crear el usuario');
	}

	async render() {
		if (this.shadowRoot) {

			const logo = this.ownerDocument.createElement('img');
			logo.src = 'https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/Group%2085.png?raw=true';
			logo.alt = 'Logo'; 
			logo.className = 'logo-img'; 
			this.shadowRoot.appendChild(logo);

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Join us';
			this.shadowRoot.appendChild(title);

			const pEmail = this.ownerDocument.createElement('input');
			pEmail.placeholder = 'Email';
			pEmail.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pEmail);

			const userName = this.ownerDocument.createElement('input');
			userName.placeholder = 'Username';
			userName.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(userName);

			const Bio = this.ownerDocument.createElement('input');
			Bio.placeholder = 'Biography: “Superhero Fan”';
			Bio.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(Bio);

			const password = this.ownerDocument.createElement('input');
			password.placeholder = 'Password';
			password.addEventListener('change', this.changeName);
			this.shadowRoot.appendChild(password);

			const ConfirmPassword = this.ownerDocument.createElement('input');
			ConfirmPassword.placeholder = 'Confirm password';
			ConfirmPassword.addEventListener('change', this.changeAge);
			this.shadowRoot.appendChild(ConfirmPassword);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Registrarme';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);

			const login = this.ownerDocument.createElement('buttom');
			login.innerText = 'Login';
			login?.addEventListener('click',() =>  {
                dispatch(navigate(Screens.DASHBOARD))
            });
			this.shadowRoot.appendChild(login);

			const signIN = this.ownerDocument.createElement('a');
			signIN.innerText = 'Or sign in with';
			signIN.className = 'signIN';
			signIN.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(signIN);

			const userIcon = this.ownerDocument.createElement('iconos');
			userIcon.className = 'user-icon';
			userIcon.innerHTML = `

			<?xml version="1.0" ?><svg height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" fill="#000"/><path d="M18,26.1623226 L18,46.5476129 C18,47.6566452 18.8117419,48.5554839 19.9300645,48.5554839 L51.7447742,48.5554839 C52.8619355,48.5554839 53.6748387,47.6461935 53.6748387,46.5476129 L53.6748387,26.1623226 C53.6748387,24.9452903 52.947871,24 51.7447742,24 L19.9300645,24 C18.6805161,24 18,24.9685161 18,26.1623226 M20.9334194,27.9379355 C20.9334194,27.4467097 21.2307097,27.1656774 21.7056774,27.1656774 C21.9994839,27.1656774 33.560129,34.4910968 34.2603871,34.9207742 L36.0696774,36.0460645 C36.6433548,35.6616774 37.2193548,35.3330323 37.8139355,34.9347097 C39.0274839,34.1589677 49.8251613,27.1656774 50.1224516,27.1656774 C50.5985806,27.1656774 50.8947097,27.4467097 50.8947097,27.9379355 C50.8947097,28.4581935 49.8925161,28.9749677 49.239871,29.3732903 C45.1393548,31.8723871 41.04,34.5967742 36.980129,37.1887742 C36.7432258,37.3490323 36.2845161,37.6916129 35.9407742,37.6393548 C35.5575484,37.580129 23.7936774,30.0224516 21.6534194,28.7636129 C21.3317419,28.5743226 20.9334194,28.4012903 20.9334194,27.9379355" fill="#FFF"/></g></svg>

			<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="56.693px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>

			<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.347,5.155c-13.6,0-24.625,11.025-24.625,24.625c0,13.602,11.025,24.625,24.625,24.625  c13.6,0,24.625-11.023,24.625-24.625C52.972,16.18,41.946,5.155,28.347,5.155z M29.759,15.141c1.117-1.311,3.006-2.283,4.564-2.346  c0.199,1.816-0.533,3.637-1.613,4.947c-1.084,1.309-2.857,2.328-4.598,2.193C27.878,18.157,28.755,16.301,29.759,15.141z   M38.626,39.94c-1.293,1.889-2.633,3.771-4.744,3.809c-2.076,0.039-2.744-1.23-5.115-1.23c-2.373,0-3.115,1.193-5.08,1.27  c-2.037,0.076-3.589-2.037-4.892-3.92c-2.665-3.848-4.698-10.875-1.964-15.619c1.354-2.358,3.78-3.846,6.411-3.887  c2.004-0.037,3.893,1.35,5.115,1.35c1.225,0,3.521-1.666,5.936-1.42c1.01,0.041,3.846,0.406,5.668,3.071  c-0.146,0.092-3.387,1.977-3.348,5.902c0.043,4.689,4.113,6.246,4.16,6.27C40.735,35.642,40.12,37.757,38.626,39.94z"/></svg>
			`;
			this.shadowRoot.appendChild(userIcon);
		}
	}
}

customElements.define('app-register', Register);
export default Register;