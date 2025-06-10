import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCIneYhUX62MXXIHB36A_ONnvGffrvqOk",
  authDomain: "ptcc-ef535.firebaseapp.com",
  projectId: "ptcc-ef535",
  storageBucket: "ptcc-ef535.firebasestorage.app",
  messagingSenderId: "1043364169264",
  appId: "1:1043364169264:web:1694dec27549335ba48ff5"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = initializeFirestore(app, { experimentalForceLongPolling: true });

