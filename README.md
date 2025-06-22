
# 🌐 Projeto Journey CBL

Este é o repositório completo do projeto **Journey CBL**, que inclui:

- 🧩 Frontend: HTML + Tailwind CSS + Firebase Authentication + Firestore  
- 🔧 Backend: Java + Spring Boot (API REST)  
- ☁️ Firebase Hosting & Firestore (como banco de dados)

---

## 🧩 Frontend

### 📦 Estrutura

```
frontend/
├── src/
│   ├── index.html        → Página de login
│   ├── register.html     → Página de cadastro
│   ├── home.html         → Página inicial
│   ├── js/
│   │   └── auth.js       → Lógica de autenticação e rotas
│   └── style.css         → CSS gerado pelo Tailwind
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── firebase.json
├── .firebaserc
```

### 🚀 Como rodar o projeto localmente

#### 1. Instalar dependências

```bash
npm install
```

#### 2. Gerar o CSS do Tailwind

```bash
npm run build
```

> Isso gera o arquivo `dist/style.css` com base nos HTMLs.

#### 3. (Opcional) Rodar com live-server

```bash
npx live-server src
```

Ou abra o arquivo `src/index.html` diretamente no navegador.

### 🔐 Firebase Hosting e Autenticação

- Utiliza Firebase Authentication para login e registro.
- Salva os dados dos usuários na coleção `usuarios` do Firestore.
- Projeto já configurado com Firebase Hosting.

#### Fazer deploy

```bash
firebase login
firebase deploy
```

### ✏️ O que pode ser modificado

- Os arquivos HTML (páginas, layout, conteúdo)
- As classes Tailwind (necessário rodar `npm run build` após)
- A lógica JS de autenticação (`auth.js`)

### ⚠️ Importante

- Sempre rodar `npm run build` antes de `firebase deploy`
- Não edite o arquivo `dist/style.css` manualmente
- Não remova os arquivos `firebase.json` ou `.firebaserc`

---

🧠 Projeto desenvolvido como parte da plataforma **Journey CBL**.
