import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdOXoREUzdSwlmPt_2UcF74TI52aSHoQc",
  authDomain: "healthshop-972b1.firebaseapp.com",
  projectId: "healthshop-972b1",
  storageBucket: "healthshop-972b1.appspot.com",
  messagingSenderId: "382497949891",
  appId: "1:382497949891:web:05063275a115348819fa76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
