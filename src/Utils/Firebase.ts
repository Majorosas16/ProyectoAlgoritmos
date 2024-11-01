import { appState } from '../store/store';

let db: any;
let auth: any;

export const getFirebaseInstance = async () => {
	if (!db) {
		const { getFirestore } = await import('firebase/firestore');
		const { initializeApp } = await import('firebase/app');
		const { getAuth } = await import('firebase/auth');

		const firebaseConfig = {
			apiKey: "AIzaSyDCB2QULYDJ68gf3XhKWORkiq1Ec2vQg08",
			authDomain: "proyectofinalalgo.firebaseapp.com",
			projectId: "proyectofinalalgo",
			storageBucket: "proyectofinalalgo.firebasestorage.app",
			messagingSenderId: "439979851204",
			appId: "1:439979851204:web:39cee00256f7739f1f3891",
			measurementId: "G-PNS34MDXCK"
		  };

		const app = initializeApp(firebaseConfig);
		db = getFirestore(app);
		auth = getAuth(app);
	}
	return { db, auth };
};

export const addProduct = async (product: any) => {
	try {
		console.log(appState.user);
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const registerProduct = {
			name: product.name,
			price: product.price,
			userUid: appState.user,
		};
		await addDoc(where, registerProduct);
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getProducts = async () => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const querySnapshot = await getDocs(where);
		const data: any[] = [];

		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

		return data;
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