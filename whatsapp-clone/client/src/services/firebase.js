import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAWjD39Zir2M5hsmc0sJJ4514jNQgZINXY",

  authDomain: "clonwasapweb.firebaseapp.com",

  projectId: "clonwasapweb",

  storageBucket: "clonwasapweb.firebasestorage.app",

  messagingSenderId: "645832091146",

  appId: "1:645832091146:web:df33e754bf753e550a61f3"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);