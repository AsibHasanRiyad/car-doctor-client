// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3h2OWjKxDMAeYlEJJh_GBRuKraP75Glk",
  authDomain: "car-doctor-4bf28.firebaseapp.com",
  projectId: "car-doctor-4bf28",
  storageBucket: "car-doctor-4bf28.appspot.com",
  messagingSenderId: "211363452139",
  appId: "1:211363452139:web:9adaaf1814d975a00f9aae"
};

// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey, 
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId, 
//   storageBucket:import.meta.env.VITE_storageBucket, 
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app