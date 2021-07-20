import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6MBBDdMpit8JkFDHhjwECuYZMIZS20tg",
  authDomain: "js-solitaire-7eb96.firebaseapp.com",
  databaseURL: "https://js-solitaire-7eb96-default-rtdb.firebaseio.com",
  projectId: "js-solitaire-7eb96",
  storageBucket: "js-solitaire-7eb96.appspot.com",
  messagingSenderId: "146939375007",
  appId: "1:146939375007:web:ce537662f2f06f1b0f21aa",
  measurementId: "G-Y96LQPKD7B"
};
firebase.initializeApp(firebaseConfig);

 export const auth=firebase.auth()
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
