// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG4atkR-4dxrsOJgDccA4UGJ0NoMfHXjw",
    authDomain: "babytesla.firebaseapp.com",
    projectId: "babytesla",
    storageBucket: "babytesla.appspot.com",
    messagingSenderId: "481034320005",
    appId: "1:481034320005:web:4b60aa32bdd1982b8f11ec",
    measurementId: "G-F7ZSD3K10Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);