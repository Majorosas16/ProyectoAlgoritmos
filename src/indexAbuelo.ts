import '../src/screens/Register/registro'
import '../src/screens/Dashboard/dashboard';
import '../src/screens/Login/login';
import '../src/screens/CreatePost/createPost';
import '../src/screens/Favorites/favoritos';
import '../src/screens/Profile/perfil';
import '../src/screens/ProfileEdit/profileEdit';
import '../src/screens/Followers/followers';
import { addObserver, appState } from './store/store';
import { Screens } from './types/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			switch (appState.screen) {
				case Screens.REGISTER:
					const register = this.ownerDocument.createElement('app-register');
					this.shadowRoot.appendChild(register);
					break;
				
				case Screens.LOGIN:
					const login = this.ownerDocument.createElement('app-login');
					this.shadowRoot.appendChild(login);
					break;

				case Screens.DASHBOARD:
					const dashboard = this.ownerDocument.createElement('app-dashboard');
					this.shadowRoot.appendChild(dashboard);
					break;

				case Screens.FORMREVIEW:
					const formReview = this.ownerDocument.createElement('create-post');
					this.shadowRoot.appendChild(formReview);
					break

				case Screens.FAVORITOS:
					const favoritos = this.ownerDocument.createElement('app-favoritos');
					this.shadowRoot.appendChild(favoritos);
					break
				case Screens.PROFILE:
					const perfil = this.ownerDocument.createElement('app-perfil');
						this.shadowRoot.appendChild(perfil);
					break

				case Screens.PROFILEEDIT:
					const profileEdit = this.ownerDocument.createElement('app-profiledit');
					this.shadowRoot.appendChild(profileEdit);
					break

				case Screens.FOLLOWS:
					const followers = this.ownerDocument.createElement('app-followers');
					this.shadowRoot.appendChild(followers);
					break
				default:
			}
			// console.log(appState);
		}
	}
}

customElements.define('app-container', AppContainer);