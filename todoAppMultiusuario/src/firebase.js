import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ9kiq-NRc3U4xYhKg8M5J7sjTdjW7XH4",
  authDomain: "todoappmultiusuario.firebaseapp.com",
  projectId: "todoappmultiusuario",
  storageBucket: "todoappmultiusuario.firebasestorage.app",
  messagingSenderId: "561430542682",
  appId: "1:561430542682:web:f716b9930cf78804551b63"
};


const app = initializeApp(firebaseConfig);

//servicios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
