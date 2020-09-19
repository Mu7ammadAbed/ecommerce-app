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
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

export default firebase;
