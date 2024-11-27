import { reducer } from './reducer';
import Storage from '../utils/storage';
import { AppState, Observer, Screens } from '../types/store';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirebaseInstance } from '../utils/Firebase';
import { navigate, setUserCredentials } from './actions';

const onAuth = async () => {
	const { auth } = await getFirebaseInstance();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
			 //Es la que se encarga de guardar el id del usuario
			dispatch(navigate(Screens.DASHBOARD)); //Esta es la de navegar a dashboard
		} else {
			dispatch(navigate(Screens.LOGIN));

		}
		console.log(user);
		
	});
	console.log('hola');
	
};
console.log('hola');

onAuth();

//El estado global, appState
const initialState: AppState = {
	screen: Screens.LOGIN,
	user: '',
};

export let appState = initialState;

let observers: Observer[] = [];

//Crear el dispatch
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	// persistStore(newState);
	observers.forEach((o: any) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
