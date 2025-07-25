// src/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar'; // Importa o componente Topbar

function LoginPage() {
  const { login, loadingAuth } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ text: '', type: '' });

    if (!email || !password) {
      setStatusMessage({ text: 'Por favor, preencha todos os campos.', type: 'error' });
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      setStatusMessage({ text: result.message, type: 'success' });
      setTimeout(() => navigate('/home'), 2000); // Exemplo: redirecionar para o dashboard
    } else {
      setStatusMessage({ text: result.message, type: 'error' });
    }
  };

  return (
    // Aplica o background e layout flex do body do seu HTML
    <div className="bg-[url('/assets/login_bg.svg')] bg-cover bg-center flex flex-col min-h-screen">
      {/* Topbar para a página de Login, com link para Cadastre-se */}
      <Topbar navTo="/register" navText="CADASTRE-SE" />

      {/* Conteúdo principal com a imagem e o formulário flutuante */}
      <div className="relative px-4 md:px-16 py-4 flex-grow flex justify-start items-center">
        {/* Imagem de Ilustração */}
        <div className="w-full max-w-5xl">
          <img src="assets/from.svg" alt="Ilustração" className="w-full object-cover" />
        </div>

        {/* Formulário de Login Flutuante */}
        <div
          className="absolute right-0 md:right-16 top-[60%] md:top-1/2 transform -translate-y-1/2 bg-white rounded-lg border shadow-xl w-full max-w-sm"
        >
          <div className="flex flex-col gap-4 px-6 pt-6">
            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="font-medium text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email aqui."
                className="mt-2 p-2 border rounded-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="font-medium text-gray-800">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="E aqui sua senha!"
                className="mt-2 p-2 border rounded-lg w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Link Esqueceu sua senha? */}
          <div className="px-6 mt-2">
            <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">Esqueceu sua senha?</Link>
          </div>

          {/* Botão Continuar */}
          <div className="px-6 mb-4">
            <button
              type="submit"
              id="loginBtn"
              onClick={handleSubmit} // Usar onClick para o botão fora do form
              className={`w-full bg-[#5BA26F] font-medium text-white px-4 mb-2 py-2 rounded-lg mt-5 ${loadingAuth ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700'}`}
              disabled={loadingAuth}
            >
              {loadingAuth ? 'Entrando...' : 'Continuar'}
            </button>
          </div>

          {/* Mensagem de Status */}
          {statusMessage.text && (
            <p id="login-status" className={`${statusMessage.type === 'success' ? 'text-green-600' : 'text-red-600'} mb-4 text-center text-sm text-gray-700`}>
              {statusMessage.text}
            </p>
          )}

          {/* Link Cadastre-se aqui */}
          <div className="border-t">
            <div className="p-4 text-sm text-center">
              <p>Ainda não fez seu cadastro? <Link to="/register" className="underline mb-1">Cadastre-se aqui.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
