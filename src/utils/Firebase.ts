import { appState } from '../store/store';
import { review } from '../types/product';
// import storage from './storage';

let db: any;
let auth: any;
let storage: any;

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
		storage = getStorage();
	}
	return { db, auth, storage };
};

export const addProduct = async (product: any) => { // utilidad que agrega productos a la base de datos
	try {
		console.log(appState.user);
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const addproduct =  {
			userUid: appState.user,
			user: product.user,
			bio: product.bio,
			imagecover: product.imagecover,
			titlereview: product.titlereview,
			rating: product.rating,
			review:product.review,
			name:product.name,
			dateadded: new Date().toISOString()

		} //"vas a crear una coleccion en mi base de datos. con el nombre '...'"
		await addDoc(where, addproduct); //vas a guardar el producto en where
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
			email: credentials.email,
			password: credentials.password,
			name: credentials.name,
			bio: credentials.bio,

		};

		await setDoc(where, data);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const getUser = async (uid: string) => {
    try {
        const { db } = await getFirebaseInstance();
        const { doc, getDoc } = await import('firebase/firestore');

        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
		console.log('estoy aqui', userRef);
		
        if (userSnap) {
            return userSnap.data(); 
        } else {
            console.log('No such document!');
            return null;
        }
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
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

// export const uploadFile = async (file: File, id: string) => {
// 		const { storage } = await getFirebaseInstance();
// 		const { ref , uploadBytes } = await import('firebase/storage');

// 		const storageRef = ref(storage, 'imagesCover/' + id);
// 		uploadBytes(storageRef, file).then((snapshot) =>{
// 			console.log('File uploaded');
			
// 		});
// };

export const uploadFile = async (file: File, id: string) => {
    const { storage } = await getFirebaseInstance();
    const { ref, uploadBytes } = await import('firebase/storage');

    const storageRef = ref(storage, 'imagesCover/' + id);
	uploadBytes(storageRef, file).then((snapshot) => {
		console.log('File uploaded');
	});

    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('File uploaded');
    });
};

export const uploadFileProfile = async (file: File, id: string) => {
    const { storage } = await getFirebaseInstance();
    const { ref, uploadBytes } = await import('firebase/storage');

    const storageRef = ref(storage, 'imagesProfile/' + id);
	uploadBytes(storageRef, file).then((snapshot) => {
		console.log('File uploaded');
	});

    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('File uploaded');
    });
};

// export const getFile = async (id: string): Promise<string | null> => {
//     const { storage } = await getFirebaseInstance();
//     const { ref, getDownloadURL } = await import('firebase/storage');

//     const storageRef = ref(storage, 'imagesCover/' + id);
    
//     try {
//         const url = await getDownloadURL(storageRef);
//         return url; // Devuelve la URL si tiene éxito
//     } catch (error) {
//         console.error(error);
//         return null; // Devuelve null si ocurre un error
// 		}
// };


export const getFile = async (id: string) => {
	const { storage } = await getFirebaseInstance();
    const { ref, getDownloadURL } = await import('firebase/storage');
	const storageRef = ref(storage, 'imagesCover/' + id);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});
	return urlImg;
};

export const getFilePerfil = async (id: string) => {
	const { storage } = await getFirebaseInstance();
    const { ref, getDownloadURL } = await import('firebase/storage');
	const storageRef = ref(storage, 'imagesProfile/' + id);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});
	return urlImg;
};

export const getFiles = async (id: string): Promise<string[]> => {
    const { storage } = await getFirebaseInstance();
    const { ref, listAll, getDownloadURL } = await import('firebase/storage');

    const storageRef = ref(storage, 'imagesCover/' + id);
    
    try {
        // Obtener una lista de archivos en el directorio
        const result = await listAll(storageRef);

        // Obtener las URLs de los archivos
        const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));
        
        return urls; // Devolvemos un array de URLs
    } catch (error) {
        console.error(error);
        return []; // Si hay error, devolvemos un array vacío
		}
};

export const getFileProfile = async (id: string) => {
	const { storage } = await getFirebaseInstance();
    const { ref, getDownloadURL } = await import('firebase/storage');
	const storageRef = ref(storage, 'imagesProfile/' + id);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});
	return urlImg;
};


