import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBG96F4NQk6rLdeeVLJIdvvK86c_9cGlMk',
  authDomain: 'disneyplus-clone-efa67.firebaseapp.com',
  projectId: 'disneyplus-clone-efa67',
  storageBucket: 'disneyplus-clone-efa67.appspot.com',
  messagingSenderId: '731758181200',
  appId: '1:731758181200:web:f8dd4d681a47e0a99d4a55',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
