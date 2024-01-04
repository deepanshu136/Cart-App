import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4xLJGUxJSdDPKZTueOw0nr8T1muNdaYU",
  authDomain: "cart-7a4bc.firebaseapp.com",
  projectId: "cart-7a4bc",
  storageBucket: "cart-7a4bc.appspot.com",
  messagingSenderId: "695418805512",
  appId: "1:695418805512:web:a0d16c26cc65e5a1dae0bd"
};

// Initialize Firebase
//  const app=initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

