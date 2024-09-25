import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAetP2P3jNJQDexxEzFyZPg_c1KLkAqZXA",
  authDomain: "eco-market-aade9.firebaseapp.com",
  projectId: "eco-market-aade9",
  storageBucket: "eco-market-aade9.appspot.com",
  messagingSenderId: "1043277677842",
  appId: "1:1043277677842:web:f474c00cd9af3f74b09fcb",
  measurementId: "G-D6HN9CS73L"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
auth.languageCode = 'it';