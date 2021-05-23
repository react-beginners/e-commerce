import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1QYIDvGltmARHuR6Ge6barkElZIX9vPs",
    authDomain: "e-com-e04da.firebaseapp.com",
    projectId: "e-com-e04da",
    storageBucket: "e-com-e04da.appspot.com",
    messagingSenderId: "128068218681",
    appId: "1:128068218681:web:da1d4e0d45a90e949dc2e8"
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;