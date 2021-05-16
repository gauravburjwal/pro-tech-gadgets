import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAXId6dvrVzPAqSLh8ewBYuZzJd23V0mdg',
    authDomain: 'pro-tech-gadgets.firebaseapp.com',
    projectId: 'pro-tech-gadgets',
    storageBucket: 'pro-tech-gadgets.appspot.com',
    messagingSenderId: '933678599915',
    appId: '1:933678599915:web:d37a91ce8e1a11b24478ae',
    measurementId: 'G-1E017TG29W',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error while creating user', error.messgae);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
