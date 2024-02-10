// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATUHhqO5Xto7SK5YRhv_b3uWMdBVEq_uQ",
  authDomain: "valentineapp-15bd6.firebaseapp.com",
  projectId: "valentineapp-15bd6",
  storageBucket: "valentineapp-15bd6.appspot.com",
  messagingSenderId: "95275784522",
  appId: "1:95275784522:web:9fb5089dd4f4a9c1f849b3",
  measurementId: "G-06ZC65NNTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
