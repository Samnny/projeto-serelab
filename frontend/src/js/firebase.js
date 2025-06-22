console.log("🔥 Firebase carregado!");

const firebaseConfig = {
  apiKey: "AIzaSyBAm6k93OqfEdzXmJfitl0i-OkpXnnbfqY",
  authDomain: "pocs-pi2.firebaseapp.com",
  projectId: "pocs-pi2",
  storageBucket: "pocs-pi2.appspot.com",
  messagingSenderId: "817648047285",
  appId: "1:817648047285:web:13c8d797351e1c55789afc",
  measurementId: "G-EB4ZZL466N"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

window.auth = auth;
window.db = db;

console.log("✅ Firebase Auth e Firestore prontos!");