import { appState } from '../store/store';
import storage from './storage';

let db: any;
let auth: any;
let storagefb: any;

//esto para que el bundle no esté tan pesado
export const getFirebaseInstance = async () => {
	if (!db) { //si existe la base de datos
		const { getFirestore } = await import('firebase/firestore'); //base de datos
		const { initializeApp } = await import('firebase/app'); // inicializa la aplicación
		const { getAuth } = await import('firebase/auth'); //autenticacion
		const { getStorage } = await import('firebase/storage'); //storage, para imagenes, videos y mas
		
		const firebaseConfig = {
			apiKey: "AIzaSyDCB2QULYDJ68gf3XhKWORkiq1Ec2vQg08",
			authDomain: "proyectofinalalgo.firebaseapp.com",
			projectId: "proyectofinalalgo",
			storageBucket: "proyectofinalalgo.firebasestorage.app",
			messagingSenderId: "439979851204",
			appId: "1:439979851204:web:39cee00256f7739f1f3891",
			measurementId: "G-PNS34MDXCK"
		  };

		const app = initializeApp(firebaseConfig); // esto inicializa la app con la llave "firebaseConfig"
		db = getFirestore(app); //referencia de la base de datos
		auth = getAuth(app);
		storagefb = getStorage();
	}
	return { db, auth, storage };
};

export const addProduct = async (product: any) => { // utilidad que agrega productos a la base de datos
	try {
		console.log(appState.user);
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products'); //"vas a crear una coleccion en mi base de datos. con el nombre '...'"
		// const registerProduct = {
		// 	name: product.name,
		// 	price: product.price,
		// 	userUid: appState.user,
		// };
		await addDoc(where, product); //vas a guardar el producto en where
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getProducts = async () => { // utilidad que obtiene productos
	try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'products'); //"vas a crear una coleccion en mi base de datos. con el nombre 'productis'"
		const querySnapshot = await getDocs(where); // toma un captura de pantalla
		const data: any[] = []; 

		querySnapshot.forEach((doc) => { //recorre el arreglo querySnapshot
			data.push(doc.data()); // solo quiero la data, lo que fue escrito
		});

		return data; // retorna la data con los datos que solo me importan
	} catch (error) {
		console.error('Error getting documents', error);
	}
};

export const registerUser = async (credentials: any) => {
	try {
		const { auth, db } = await getFirebaseInstance();
		const { createUserWithEmailAndPassword } = await import('firebase/auth');
		const { doc, setDoc } = await import('firebase/firestore');

		const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

		const where = doc(db, 'users', userCredential.user.uid);
		const data = {
			age: credentials.age,
			name: credentials.name,
		};

		await setDoc(where, data);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const loginUser = async (email: string, password: string) => {
	try {
		const { auth } = await getFirebaseInstance();
		const { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } = await import('firebase/auth');

		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, password);
			})
			.catch((error: any) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	} catch (error) {
		console.error(error);
	}
};

// export const uploadFile = async () => {
// 	const {ref} = await import('firebase/storage');
// 	const storageRef = ref()
// }