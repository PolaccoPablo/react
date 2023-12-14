import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCNmkO-HrHtozaQ5hib2XXSEzUPiSsFADk",
    authDomain: "p-de-luna.firebaseapp.com",
    projectId: "p-de-luna",
    storageBucket: "p-de-luna.appspot.com",
    messagingSenderId: "757394715854",
    appId: "1:757394715854:web:214b00240269d36fad4c9f",
    measurementId: "G-G9YB2PQQJ6"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


