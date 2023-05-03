// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfdVzsgpzCZuNVxUXB20r7h7KNyxhzMRM",
  authDomain: "chef-recipe-hunter-clien-68e82.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-68e82",
  storageBucket: "chef-recipe-hunter-clien-68e82.appspot.com",
  messagingSenderId: "1097012124261",
  appId: "1:1097012124261:web:3f94410b63f15b9023848c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;