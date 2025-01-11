import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "reactchatapp-00001.firebaseapp.com",
  projectId: "reactchatapp-00001",
  storageBucket: "reactchatapp-00001.firebasestorage.app",
  messagingSenderId: "659671051624",
  appId: "1:659671051624:web:71fcc78d5a8ba490c4badd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
