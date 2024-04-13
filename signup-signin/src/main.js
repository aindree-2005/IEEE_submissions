import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlUJjH2Vr2jg2Yh0-R0Fc1iWOUxAN7PCE",
  authDomain: "jusc-e0df8.firebaseapp.com",
  projectId: "jusc-e0df8",
  storageBucket: "jusc-e0df8.appspot.com",
  messagingSenderId: "697934073014",
  appId: "1:697934073014:web:c2ca0a21438c87af9faa17",
  measurementId: "G-9L729FN64H"
};

// Disable ESLint for the next line
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')