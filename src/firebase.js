import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeyoDDUJK-x0R9wMJO99HHYVfqdb7kUtU",
  authDomain: "react-notes-76202.firebaseapp.com",
  projectId: "react-notes-76202",
  storageBucket: "react-notes-76202.appspot.com",
  messagingSenderId: "871717851889",
  appId: "1:871717851889:web:e66d175704fbf5018acf50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")