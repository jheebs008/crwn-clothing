import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCEt7SqnBEla76JpcdzErH9jcwHLQHa3I",
    authDomain: "crwn-db-7106f.firebaseapp.com",
    projectId: "crwn-db-7106f",
    storageBucket: "crwn-db-7106f.appspot.com",
    messagingSenderId: "202723356720",
    appId: "1:202723356720:web:67e701a8d8220fc86bfdf5",
    measurementId: "G-GP7RS6NDGQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;