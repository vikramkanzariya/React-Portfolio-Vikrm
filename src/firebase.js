import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzG_L8Yd06Wv-a6TDwY3EnHL4bY6Nm1Xo",
  authDomain: "react-portfolio-vikram.firebaseapp.com",
  projectId: "react-portfolio-vikram",
  storageBucket: "react-portfolio-vikram.appspot.com",
  messagingSenderId: "968964022162",
  appId: "1:968964022162:web:0d398a1bd4fa8b2f1f6b4b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();