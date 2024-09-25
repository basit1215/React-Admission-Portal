import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8x3X3DtD31VQVK8HhywoZgzWgdT788os",
  authDomain: "admission-portal-5f415.firebaseapp.com",
  projectId: "admission-portal-5f415",
  storageBucket: "admission-portal-5f415.appspot.com",
  messagingSenderId: "336766988316",
  appId: "1:336766988316:web:ed7d1ee0c2dba2f4016fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app