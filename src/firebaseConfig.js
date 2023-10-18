// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfJI9UYYi-YpXfZK6WvYCR06NRYIzeX9g",
    authDomain: "technology-and-electroni-526fd.firebaseapp.com",
    projectId: "technology-and-electroni-526fd",
    storageBucket: "technology-and-electroni-526fd.appspot.com",
    messagingSenderId: "219361739606",
    appId: "1:219361739606:web:868531134d5ed9ae244cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;