// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyDFGTK0ZdOnCd5DxeOCWvvWM-c-H0ESEpM",
//   authDomain: "book-catalog-6edc2.firebaseapp.com",
//   databaseURL: "https://book-catalog-6edc2-default-rtdb.firebaseio.com",
//   projectId: "book-catalog-6edc2",
//   storageBucket: "book-catalog-6edc2.appspot.com",
//   messagingSenderId: "940129925671",
//   appId: "1:940129925671:web:6898d28395b14b7b90ec02"
// };


// const app = initializeApp(firebaseConfig);














// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDFGTK0ZdOnCd5DxeOCWvvWM-c-H0ESEpM",
//   authDomain: "book-catalog-6edc2.firebaseapp.com",
//   databaseURL: "https://book-catalog-6edc2-default-rtdb.firebaseio.com",
//   projectId: "book-catalog-6edc2",
//   storageBucket: "book-catalog-6edc2.appspot.com",
//   messagingSenderId: "940129925671",
//   appId: "1:940129925671:web:6898d28395b14b7b90ec02"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export { database };

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFGTK0ZdOnCd5DxeOCWvvWM-c-H0ESEpM",
  authDomain: "book-catalog-6edc2.firebaseapp.com",
  databaseURL: "https://book-catalog-6edc2-default-rtdb.firebaseio.com",
  projectId: "book-catalog-6edc2",
  storageBucket: "book-catalog-6edc2.appspot.com",
  messagingSenderId: "940129925671",
  appId: "1:940129925671:web:6898d28395b14b7b90ec02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
