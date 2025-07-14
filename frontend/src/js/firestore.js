function register() {
  const emailEl = document.getElementById("email");
  const senhaEl = document.getElementById("senha");
  const apelidoEl = document.getElementById("apelido");
  const generoEl = document.getElementById("genero");
  const pronomeEl = document.getElementById("pronome");
  const status = document.getElementById("cadastro-status");

  status.textContent = "";
  status.className = "";

  const email = emailEl.value.trim();
  const senha = senhaEl.value.trim();
  const apelido = apelidoEl.value.trim();
  const genero = generoEl.value;
  const pronome = pronomeEl.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    status.textContent = "Por favor, insira um e-mail válido.";
    return;
  }

  if (!senha || senha.length < 6) {
    status.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (!apelido || apelido.length < 3) {
    status.textContent = "O apelido deve ter pelo menos 3 caracteres.";
    return;
  }

  if (!genero) {
    status.textContent = "Por favor, selecione um gênero.";
    return;
  }

  if (!pronome) {
    status.textContent = "Por favor, selecione um pronome.";
    return;
  }

  // 1️⃣ Cadastrar no backend
  fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
      apelido: apelido,
      genero: genero,
      pronome: pronome
    })
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.error || "Erro ao registrar usuário.");
        });
      }
      return response.json(); // contém uid ou mensagem
    })
    .then(data => {
      console.log("Registrado no backend:", data);

      // 2️⃣ Fazer login com Firebase
      return firebase.auth().signInWithEmailAndPassword(email, senha);
    })
    .then(userCredential => {
      // 3️⃣ Obter token JWT
      return userCredential.user.getIdToken();
    })
    .then(token => {
      // 4️⃣ Verificar token com backend
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
        throw new Error("Erro ao verificar token com o backend.");
      }
      return response.json();
    })
    .then(data => {
      console.log("Usuário autenticado com sucesso:", data);
      // ✅ Tudo certo: redirecionar
      window.location.href = "home.html";
    })
    .catch(error => {
      console.error("Erro no cadastro/login:", error);
      status.textContent = "Erro: " + error.message;
      status.className = "text-red-600 mt-4 text-sm";
    });
}