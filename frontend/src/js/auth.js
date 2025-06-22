const firebaseConfig = {
  apiKey: "AIzaSyBAm6k93OqfEdzXmJfitl0i-OkpXnnbfqY",
  authDomain: "pocs-pi2.firebaseapp.com",
  projectId: "pocs-pi2",
  storageBucket: "pocs-pi2.firebasestorage.app",
  messagingSenderId: "817648047285",
  appId: "1:817648047285:web:13c8d797351e1c55789afc",
  measurementId: "G-EB4ZZL466N"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html"; // redireciona ao logar
    })
    .catch((err) => alert("Erro: " + err.message));
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html"; // volta ao login
  });
}

auth.onAuthStateChanged((user) => {
  const currentPage = window.location.pathname;

  if (user) {
    if (currentPage.includes("index.html") || currentPage.includes("register.html")) {
      window.location.href = "home.html";
    }
  } else {
    // Bloqueia apenas páginas privadas
    if (currentPage.includes("home.html")) {
      window.location.href = "index.html";
    }
  }
});

function register() {
  const emailIpunt = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const apelido = document.getElementById("apelido").value.trim();
  const genero = document.getElementById("genero").value;
  const pronome = document.getElementById("pronome").value;
  const status = document.getElementById("cadastro-status");

  const email = emailInput.value.trim();

  if (!emailInput.validity.valid) {
    status.textContent = "Digite um e-mail válido.";
    return;
  }

  if (senha.length < 6) {
    status.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (apelido.length < 3) {
    status.textContent = "Apelido deve ter no mínimo 3 caracteres.";
    return;
  }

  if (!genero) {
    status.textContent = "Selecione um gênero.";
    return;
  }

  if (!pronome) {
    status.textContent = "Selecione um pronome.";
    return;
  }

  // Criação da conta
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;

      return firebase.firestore().collection("usuarios").doc(uid).set({
        id: uid,
        email: email,
        apelido: apelido,
        genero: genero,
        pronome: pronome,
        premium: false,
        criadoEm: firebase.firestore.Timestamp.now()
      });
    })
    .then(() => {
      status.textContent = "Cadastro realizado com sucesso!";
      setTimeout(() => window.location.href = "home.html", 1500);
    })
    .catch((error) => {
      status.textContent = "Erro: " + error.message;
    });
}