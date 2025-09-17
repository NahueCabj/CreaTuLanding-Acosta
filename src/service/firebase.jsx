// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVxBAopLfsC60Xcq8aMeNcpvfM7w8yjyo",
  authDomain: "kikacoffe.firebaseapp.com",
  projectId: "kikacoffe",
  storageBucket: "kikacoffe.firebasestorage.app",
  messagingSenderId: "332930666455",
  appId: "1:332930666455:web:7eacff3f46119232448592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)