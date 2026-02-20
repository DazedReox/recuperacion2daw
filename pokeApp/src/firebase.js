import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCiyqa1529w4SNdPlAN6V-DIc6cSd0Li0c",

  authDomain: "pokeapprecu.firebaseapp.com",

  projectId: "pokeapprecu",

  storageBucket: "pokeapprecu.firebasestorage.app",

  messagingSenderId: "1097986285742",

  appId: "1:1097986285742:web:c50f9588a2973a5eb74d3f"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);