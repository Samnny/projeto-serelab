
# 🌐 Projeto Journey CBL

Este repositório contém o frontend do projeto **Journey CBL**, desenvolvido com React, Vite para o ambiente de desenvolvimento e build, Tailwind CSS para estilização e Firebase para serviços de autenticação, banco de dados (Firestore) e hospedagem (Hosting).

Atualmente, este projeto foca exclusivamente na implementação do frontend, sem um backend customizado. Todas as operações de dados e autenticação são gerenciadas diretamente pelo Firebase.

---

## 🧩 Frontend

O frontend é uma Single Page Application (SPA) construída com React, oferecendo uma experiência de usuário fluida e reativa.

### 📦 Estrutura

A estrutura do projeto segue as melhores práticas para aplicações React, organizando o código em componentes reutilizáveis, páginas e módulos de serviço.

```
frontend/
├── public/                 # Arquivos estáticos servidos diretamente (ex: index.html, favicons, assets não importados)
│   └── index.html          # O único arquivo HTML da aplicação, onde o React é montado
├── src/
│   ├── assets/             # Ativos estáticos importados pelo código React (imagens, fontes, CSS global)
│   │   ├── css/            # Arquivo CSS principal com as diretivas do Tailwind
│   │   │   └── index.css
│   │   ├── from.svg        # Imagem de ilustração para a página de login
│   │   └── login_bg.svg    # Imagem de fundo para as páginas de autenticação
│   ├── components/         # Componentes React pequenos e reutilizáveis
│   │   └── Topbar/         # Componente de cabeçalho compartilhado
│   │       └── Topbar.jsx
│   ├── pages/              # Componentes React que representam as telas/rotas principais
│   │   ├── LoginPage/
│   │   │   └── LoginPage.jsx # Página de Login
│   │   └── RegisterPage/
│   │       └── RegisterPage.jsx # Página de Cadastro
│   │   └── ... (outras páginas como HomePage, ForgotPasswordPage, etc.)
│   ├── firebase/           # Módulo para configurações e operações com Firebase
│   │   ├── auth.js         # Funções para Firebase Authentication
│   │   ├── config.js       # Inicialização do Firebase
│   │   └── firestore.js    # Funções para Firebase Firestore
│   ├── hooks/              # Custom Hooks para encapsular lógica reutilizável com estado
│   │   └── useAuth.js      # Hook para gerenciar o estado de autenticação
│   ├── App.jsx             # Componente raiz da aplicação, define as rotas (React Router)
│   └── main.jsx            # Ponto de entrada da aplicação React (renderiza o App.jsx)
├── tailwind.config.js      # Configurações personalizadas do Tailwind CSS
├── postcss.config.js       # Configurações do PostCSS (necessário para o Tailwind)
├── package.json            # Dependências do projeto e scripts npm
├── package-lock.json       # Garante versões exatas das dependências
├── firebase.json           # Configurações do Firebase CLI (Hosting, Firestore Rules)
└── .firebaserc             # Define qual projeto Firebase está vinculado
```

### 🚀 Como rodar o projeto localmente

Para iniciar o ambiente de desenvolvimento e testar o projeto em sua máquina:

#### 1. Navegar para a Pasta do Projeto
Certifique-se de estar na raiz da pasta do frontend:

```bash
cd fronted
```

#### 2. Instalar Dependências
Instale todas as bibliotecas e ferramentas necessárias:

```bash
npm install
```

#### 3. Iniciar o Servidor de Desenvolvimento
O Vite iniciará um servidor local com "Hot Module Replacement" (HMR) para desenvolvimento rápido:

```bash
npm run dev
```

Abra seu navegador e acesse a URL fornecida (geralmente http://localhost:5173).

### 🔐 Firebase Hosting e Autenticação
Este projeto utiliza o Firebase para:

- **Firebase Authentication:** Gerencia o login e registro de usuários via e-mail e senha.
- **Firestore:** Armazena dados nas coleções.
- **Firebase Hosting:** Para o deploy e hospedagem da aplicação web.

#### Fazer Deploy para o Firebase Hosting

##### 1. Autenticar no Firebase CLI (se ainda não o fez):

```bash
firebase login
```

  ##### 1.1. Gerar a Build de Produção:
  Este comando compila e otimiza sua aplicação React para o ambiente de produção, gerando os arquivos estáticos na pasta **dist/**.

  ```bash
  npm run build
  ```

##### 2. Autenticar no Firebase CLI (se ainda não o fez):

```bash
firebase deploy
```
Após o deploy, o Firebase CLI fornecerá a URL pública da sua aplicação.

### ✏️ O que pode ser modificado

- Componentes React (.jsx): Modifique o layout, a lógica e o comportamento das páginas e componentes.
- Estilos Tailwind CSS: Adicione ou modifique classes Tailwind diretamente no JSX dos componentes.
- Lógica Firebase: Ajuste as funções em src/firebase/ para interagir com a autenticação e o Firestore conforme suas necessidades.
- Custom Hooks (src/hooks/): Crie ou modifique hooks para reutilizar lógica com estado.

### ⚠️ Importante

- Sempre rodar **npm run build** antes de **firebase deploy** para garantir que a versão mais recente e otimizada da sua aplicação seja publicada.
- Não edite os arquivos na pasta **dist/** manualmente. Eles são gerados automaticamente pelo processo de build.
- Não remova os arquivos firebase.json ou .firebaserc. Eles são essenciais para a configuração e o deploy do Firebase.

---

🧠 Projeto desenvolvido como parte da plataforma **Journey CBL**.
