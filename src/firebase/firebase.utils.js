import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDK9Gm06H5pi6WHHAAkiq8uD7C2QwG-Ydo",
    authDomain: "crwn-db-cf16f.firebaseapp.com",
    databaseURL: "https://crwn-db-cf16f.firebaseio.com",
    projectId: "crwn-db-cf16f",
    storageBucket: "crwn-db-cf16f.appspot.com",
    messagingSenderId: "315537754664",
    appId: "1:315537754664:web:843e74232af18c1a10831d",
    measurementId: "G-QGFFVJ5VMS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) { // if snapshot.exists === false
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.error('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
