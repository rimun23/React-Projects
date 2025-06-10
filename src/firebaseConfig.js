import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMiRBqrKeiOyPJHQ-XrlB96MtRnUv1VP0",
  authDomain: "shop-de8b9.firebaseapp.com",
  projectId: "shop-de8b9",
  storageBucket: "shop-de8b9.firebasestorage.app",
  messagingSenderId: "1002660395582",
  appId: "1:1002660395582:web:98b41357e5940eb983af6f",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
