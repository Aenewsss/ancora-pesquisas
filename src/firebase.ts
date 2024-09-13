import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';

console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

const firebaseConfig = {
    apiKey: "AIzaSyCmZJnc4RpddHa3SGnuvmce0X_mcR4dFmg",
    authDomain: "ancora-pesquisas.firebaseapp.com",
    projectId: "ancora-pesquisas",
    storageBucket: "ancora-pesquisas.appspot.com",
    messagingSenderId: "337142212771",
    appId: "1:337142212771:web:d2ea9e19b54402a1813716",
    measurementId: "G-Q4WNLKXQHX"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app)
const storage = getStorage(app)

export { database, storage };