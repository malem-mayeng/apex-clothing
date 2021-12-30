import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvGC0lEKtnaa7tE7lQeK_oAB4othMB-ZA",
  authDomain: "my-apex-clothing.firebaseapp.com",
  projectId: "my-apex-clothing",
  storageBucket: "my-apex-clothing.appspot.com",
  messagingSenderId: "922677758443",
  appId: "1:922677758443:web:d96fe2b309c247989271ae",
  measurementId: "G-BCMR54M2CY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch( error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;