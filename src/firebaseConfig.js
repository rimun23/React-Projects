import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDo0FfjWHLmVy_aFKfklEYEbVU0LOYeaF8",
  authDomain: "blog-4548a.firebaseapp.com",
  databaseURL: "https://blog-4548a-default-rtdb.firebaseio.com",
  projectId: "blog-4548a",
  storageBucket: "blog-4548a.firebasestorage.app",
  messagingSenderId: "725081530775",
  appId: "1:725081530775:web:6c2b73ffe3d531e5f264d2",
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
