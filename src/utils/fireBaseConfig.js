import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPyTlqEcbL1AtoFJHMxRuQrMX-BzNilyo",
  authDomain: "mica-nails.firebaseapp.com",
  projectId: "mica-nails",
  storageBucket: "mica-nails.firebasestorage.app",
  messagingSenderId: "830516074617",
  appId: "1:830516074617:web:e09b8f32133384c2b55ca8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }