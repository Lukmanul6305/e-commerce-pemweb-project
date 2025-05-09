// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcgnHf5aPCmXZA1cTTreDwkC3-IduLZIQ",
  authDomain: "web-course-b01ba.firebaseapp.com",
  projectId: "web-course-b01ba",
  storageBucket: "web-course-b01ba.firebasestorage.app",
  messagingSenderId: "116129975914",
  appId: "1:116129975914:web:a89f26e103fb9293ce4413",
  measurementId: "G-YPVZYCVS1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
export { app, analytics, auth };
