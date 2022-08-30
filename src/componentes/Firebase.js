
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD-PhxqMP-KyFzLRkBSyc2bSL6NUgO41Wo",
    authDomain: "comision-34705-1f5f9.firebaseapp.com",
    projectId: "comision-34705-1f5f9",
    storageBucket: "comision-34705-1f5f9.appspot.com",
    messagingSenderId: "983125056817",
    appId: "1:983125056817:web:04075f1ea0a7d43c2ca410"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
