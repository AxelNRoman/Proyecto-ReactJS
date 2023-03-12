import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7FeI5LEixVAgFGUWqk6kDb74UJG3hViU",
  authDomain: "mundogamer-5ba0e.firebaseapp.com",
  projectId: "mundogamer-5ba0e",
  storageBucket: "mundogamer-5ba0e.appspot.com",
  messagingSenderId: "261872288447",
  appId: "1:261872288447:web:3a45ddd4c9244d3d4c3c0a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
