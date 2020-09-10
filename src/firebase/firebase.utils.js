import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCo3olCHNrA_SW_AoGZT8DfIP_kH8Pg1gw",
  authDomain: "ecommerce-33a97.firebaseapp.com",
  databaseURL: "https://ecommerce-33a97.firebaseio.com",
  projectId: "ecommerce-33a97",
  storageBucket: "ecommerce-33a97.appspot.com",
  messagingSenderId: "659323581980",
  appId: "1:659323581980:web:0f71da852f95b6b87111d9",
  measurementId: "G-JEY5TFRWGY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then(console.log).catch(console.error);

export default firebase;
