import '../src/screens/registro'
import '../src/screens/dashboard';
import '../src/screens/login';
import '../src/screens/createPost';
import '../src/screens/favoritos';
import { addObserver, appState } from '../src/store/store';
import { Screens } from '../src/types/store';

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
				default:
			}
			// console.log(appState);
		}
	}
}

customElements.define('app-container', AppContainer);