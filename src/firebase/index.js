import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUFvGXrEKP5KzfXMb2utcxAmZ3GpDuujc",
  authDomain: "gestion-formation-c84bd.firebaseapp.com",
  projectId: "gestion-formation-c84bd",
  storageBucket: "gestion-formation-c84bd.appspot.com",
  messagingSenderId: "967205821568",
  appId: "1:967205821568:web:8b9f699aefe285ce225a65",
};

const initializeFirebase = initializeApp(firebaseConfig);
const db = getFirestore(initializeFirebase);
const auth = getAuth();
const storage = getStorage(initializeFirebase);

export { initializeFirebase, db, storage, auth };
