import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBmgMd73pFnlw9EVedc7p088SskSV5qNRk",
  authDomain: "blog-website---vue.firebaseapp.com",
  projectId: "blog-website---vue",
  storageBucket: "blog-website---vue.appspot.com",
  messagingSenderId: "893716608625",
  appId: "1:893716608625:web:0069963ca219fcf81bcdd0",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// get databse
const db = getFirestore(app)

export { db }