function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value.trim();
  const status = document.getElementById("login-status");

  status.textContent = "";

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(userCredential => {
      return userCredential.user.getIdToken();
    })
    .then(token => {
      return fetch("http://localhost:8080/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Falha ao autenticar com o backend.");
      }
      return response.json();
    })
    .then(data => {
      console.log("Usuário autenticado:", data);
      // Redirecionar após sucesso completo
      window.location.href = "home.html";
    })
    .catch(error => {
      console.error("Erro ao logar:", error);
      status.textContent = "Erro: " + error.message;
      status.className = "text-red-600 mt-4 text-sm";
    });
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