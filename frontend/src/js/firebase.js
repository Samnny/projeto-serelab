console.log("🔥 Firebase carregado!");

const firebaseConfig = {
  apiKey: "AIzaSyCHH7yNydLqIKxmRr-5m_WTUZ7r_Z3hk8Y",
  authDomain: "journey-cbl.firebaseapp.com",
  projectId: "journey-cbl",
  storageBucket: "journey-cbl.firebasestorage.app",
  messagingSenderId: "783910164513",
  appId: "1:783910164513:web:877cdb1582b6881d88ab60",
  measurementId: "G-7VZ6SLV104"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

window.auth = auth;
window.db = db;

console.log("✅ Firebase Auth e Firestore prontos!");