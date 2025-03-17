import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "calmoraai.firebaseapp.com",
    projectId: "calmoraai",
    storageBucket: "calmoraai.firebasestorage.app",
    messagingSenderId: "659612123490",
    appId: "1:659612123490:web:93bcb0c62602abc18f2c3b",
    measurementId: "G-FGWZKGWD12"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider,facebookProvider, signInWithPopup, signOut };