// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDegOx8pkRQGlB1aRpNhoJ6BFrfyElS7XM",
  authDomain: "svastha-90feb.firebaseapp.com",
  projectId: "svastha-90feb",
  storageBucket: "svastha-90feb.firebasestorage.app",
  messagingSenderId: "247174538297",
  appId: "1:247174538297:web:0afd00c328e5eb618459e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//db
export const firestore = getFirestore(app)