// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZC2D73QH6ngmjqZRPsmsPkE3z36weA7s",
    authDomain: "ticuverter.firebaseapp.com",
    projectId: "ticuverter",
    storageBucket: "ticuverter.appspot.com",
    messagingSenderId: "869510143798",
    appId: "1:869510143798:web:479c5c53aa2fbea3ec1d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;