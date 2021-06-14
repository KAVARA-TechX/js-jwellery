import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA6MBBDdMpit8JkFDHhjwECuYZMIZS20tg",
    authDomain: "js-solitaire-7eb96.firebaseapp.com",
    projectId: "js-solitaire-7eb96",
    storageBucket: "js-solitaire-7eb96.appspot.com",
    messagingSenderId: "146939375007",
    appId: "1:146939375007:web:ce537662f2f06f1b0f21aa",
    measurementId: "G-Y96LQPKD7B"
  };

const app =firebase.initializeApp(firebaseConfig);
export const auth=app.auth()
export default app;