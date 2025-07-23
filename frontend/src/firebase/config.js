import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHH7yNydLqIKxmRr-5m_WTUZ7r_Z3hk8Y",
  authDomain: "journey-cbl.firebaseapp.com",
  projectId: "journey-cbl",
  storageBucket: "journey-cbl.appspot.com",
  messagingSenderId: "783910164513",
  appId: "1:783910164513:web:877cdb1582b6881d88ab60",
  measurementId: "G-7VZ6SLV104",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };