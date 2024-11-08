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
	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			
			<link rel="stylesheet" href="../src/screens/loginStyle.css">
				<section class="container">
				<div class="form-section">
        			<div class="img-logo">
						<img src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/Backup/src/Recursos/Group%2085.png?raw=true" alt="Logo" class="logo-img">
					</div>
					<h1 class="titulo">Log in</h1>
					<div class="inputs">
						<input id="email" type="email" placeholder="Email" class="email">
						<input id="password" type="password" placeholder="Password" class="password">
					</div>
					<div class="forgot-container">
						<a class="forgot">Forgot password?</a>
					</div>
					<div class="remember-container">
						<input type="checkbox" id="rememberMe" class="remember-checkbox">
						<label for="rememberMe" class="remember-label">Remember me</label>
					</div>
					<button id="save" class="iniciarSesion">Sing in</button>
					
					<hr class="divider">
					<p class="or-sign-in">or sign in with</p>
					<hr class="divider">
					<div class="icons-container">
						<!-- SVG icons for social media login options -->
						
						<div class="icon google-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"/><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"/></svg>
						</div>
						<div class="icon facebook-icon">
							<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
								<path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
								<path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
							</svg>
						</div>
						<div class="icon user-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><defs><path id="biApple0" d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516c.024.034 1.52.087 2.475-1.258c.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422c.212-2.189 1.675-2.789 1.698-2.854c.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116c-.508.139-1.653.589-1.968.607c-.316.018-1.256-.522-2.267-.665c-.647-.125-1.333.131-1.824.328c-.49.196-1.422.754-2.074 2.237c-.652 1.482-.311 3.83-.067 4.56c.244.729.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899c.319.232 1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472c.357.013 1.061.154 1.782.539c.571.197 1.111.115 1.652-.105c.541-.221 1.324-1.059 2.238-2.758c.347-.79.505-1.217.473-1.282Z"/></defs><g fill="currentColor"><use href="#biApple0"/><use href="#biApple0"/></g></svg>
						</div>
					</div>
					<p class="question">Haven't registered? What are you waiting for?</p>
					<a id="register" class="register">Sign up</a>
					</div>
					<div class="img-back-section">
					<img src="https://github.com/Majorosas16/ProyectoAlgoritmos/blob/main/src/Recursos/Group%20175.png?raw=true" alt="back" class="back-img">
					</div>
    			</section>

			`;

			// Event listeners
			const pEmail = this.shadowRoot?.querySelector('#email');
			pEmail?.addEventListener('change', this.changeEmail.bind(this));

			const pPassword = this.shadowRoot?.querySelector('#password');
			pPassword?.addEventListener('change', this.changePassword.bind(this));

			const save = this.shadowRoot?.querySelector('#save');
			save?.addEventListener('click', this.submitForm.bind(this));

			const redirectToRegister = this.shadowRoot?.querySelector('#register');
			redirectToRegister?.addEventListener('click', () => {
				dispatch(navigate(Screens.REGISTER));
			});
		}
	}
}

customElements.define('app-login', Login)
