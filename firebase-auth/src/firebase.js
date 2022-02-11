import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn4oG44EnUoxI8WLrzk4KISnZAkEZrarc",
  authDomain: "fir-auth-3af79.firebaseapp.com",
  projectId: "fir-auth-3af79",
  storageBucket: "fir-auth-3af79.appspot.com",
  messagingSenderId: "75051010508",
  appId: "1:75051010508:web:cf097ba701b3058456f569"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.googleAuthProvider();
const facebookAuthProvider = new firebase.auth.facebookAuthProvider();


const app = initializeApp(firebaseConfig);

export {googleAuthProvider,facebookAuthProvider}