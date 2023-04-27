import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVi9JByHFvwQskviKEdTz7RgtyNXuBs4Q",
  authDomain: "products-ecommerce-9bd1d.firebaseapp.com",
  projectId: "products-ecommerce-9bd1d",
  storageBucket: "products-ecommerce-9bd1d.appspot.com",
  messagingSenderId: "868123789602",
  appId: "1:868123789602:web:c831da1155264795bcbd7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
