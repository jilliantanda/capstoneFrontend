// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATtL1E6-hKlcJ3uHFAzuXsnVhKYO5IKS0",
  authDomain: "disarray-e46db.firebaseapp.com",
  projectId: "disarray-e46db",
  storageBucket: "disarray-e46db.appspot.com",
  messagingSenderId: "552597761374",
  appId: "1:552597761374:web:72132ef96579c1b321f3cf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth }