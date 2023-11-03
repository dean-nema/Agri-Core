// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0xgwhHT6GXN0lzQjflK4MGMuy8_G9jX4",
  authDomain: "agri-core-35492.firebaseapp.com",
  projectId: "agri-core-35492",
  storageBucket: "agri-core-35492.appspot.com",
  messagingSenderId: "432335821511",
  appId: "1:432335821511:web:f735bdb1ce8e907ea4fce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 
