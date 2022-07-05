import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <h1> Welcome to PlayDate!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*

// --------------- FIREBASE INITIAL ------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7BGrGY74CDLLDfTBakn8s-5BpXVKRkpA",
  authDomain: "playdate-9bf9a.firebaseapp.com",
  projectId: "playdate-9bf9a",
  storageBucket: "playdate-9bf9a.appspot.com",
  messagingSenderId: "211081650181",
  appId: "1:211081650181:web:4ffb86866e49b88122bc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/
