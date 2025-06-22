function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const status = document.getElementById("login-status");

  status.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    status.textContent = "Por favor, insira um e-mail válido.";
    return;
  }

  if (!password || password.length < 6) {
    status.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "home.html")
    .catch((err) => alert("Erro: " + err.message));
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Proteção de páginas
auth.onAuthStateChanged((user) => {
  const currentPage = window.location.pathname;

  if (user) {
    if (currentPage.includes("index.html") || currentPage.includes("register.html")) {
      window.location.href = "home.html";
    }
  } else {
    if (currentPage.includes("home.html")) {
      window.location.href = "index.html";
    }
  }
});