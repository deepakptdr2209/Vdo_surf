// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASyoM2o6FYze0ONeZBYBhb5smdkn9cziU",
  authDomain: "vdo-surf.firebaseapp.com",
  projectId: "vdo-surf",
  storageBucket: "vdo-surf.appspot.com",
  messagingSenderId: "454586527635",
  appId: "1:454586527635:web:6b38306f45e16124668266",
  measurementId: "G-MK20SKG8CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
