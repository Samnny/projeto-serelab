function register() {
  const emailEl = document.getElementById("email");
  const senhaEl = document.getElementById("senha");
  const apelidoEl = document.getElementById("apelido");
  const generoEl = document.getElementById("genero");
  const pronomeEl = document.getElementById("pronome");
  const status = document.getElementById("cadastro-status");

  status.textContent = "";

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

  auth.createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;

      return db.collection("usuarios").doc(uid).set({
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
      status.className = "text-green-600 mt-4 text-sm";
      setTimeout(() => window.location.href = "home.html", 1500);
    })
    .catch((error) => {
      status.textContent = "Erro: " + error.message;
      status.className = "text-red-600 mt-4 text-sm";
    });
}