// src/pages/RegisterPage/RegisterPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Importa o hook de autenticação
import { useNavigate, Link } from 'react-router-dom'; // Para redirecionar e linkar
import Topbar from '../../components/Topbar/Topbar'; // Importa o componente Topbar

function RegisterPage() {
  const { register, loadingAuth } = useAuth(); // Pega a função register e o status de loading do hook
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apelido, setApelido] = useState('');
  const [genero, setGenero] = useState('');
  const [pronome, setPronome] = useState('');
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' }); // 'success' ou 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ text: '', type: '' }); // Limpa mensagens anteriores

    if (!email || !password || !apelido || !genero || !pronome) {
      setStatusMessage({ text: 'Por favor, preencha todos os campos.', type: 'error' });
      return;
    }

    const result = await register({ email, password, apelido, genero, pronome });

    if (result.success) {
      setStatusMessage({ text: result.message, type: 'success' });
      // Redireciona após um registro bem-sucedido
      setTimeout(() => navigate('/'), 2000); // Exemplo: redirecionar para o dashboard
    } else {
      setStatusMessage({ text: result.message, type: 'error' });
    }
  };

  return (
    // Aplica o background e layout flex do body do seu HTML
    <div className="bg-[url('/assets/login_bg.svg')] bg-cover bg-center flex flex-col min-h-screen">
      {/* Topbar para a página de Cadastro, com link para Login */}
      <Topbar navTo="/login" navText="LOGIN" />

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-16">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label> {/* sr-only para acessibilidade */}
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-2 border rounded-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                className="p-2 border rounded-lg w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Campo Apelido */}
            <div>
              <label htmlFor="apelido" className="sr-only">Apelido</label>
              <input
                type="text"
                id="apelido"
                placeholder="Apelido"
                className="p-2 border rounded-lg w-full"
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
                required
              />
            </div>

            {/* Campo Gênero - Usando <select> */}
            <div>
              <label htmlFor="genero" className="sr-only">Selecione o gênero</label>
              <select
                id="genero"
                className="p-2 pr-8 border rounded-lg w-full"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
              >
                <option value="">Selecione o gênero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
              </select>
            </div>

            {/* Campo Pronome - Usando <select> */}
            <div>
              <label htmlFor="pronome" className="sr-only">Selecione o pronome</label>
              <select
                id="pronome"
                className="p-2 pr-8 border rounded-lg w-full"
                value={pronome}
                onChange={(e) => setPronome(e.target.value)}
                required
              >
                <option value="">Selecione o pronome</option>
                <option value="Ele/Dele">Ele/Dele</option>
                <option value="Ela/Dela">Ela/Dela</option>
                <option value="Elu/Delu">Elu/Delu</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Botão Cadastrar */}
            <button
              type="submit"
              id="registerBtn"
              className={`w-full bg-[#5BA26F] text-white font-medium px-4 py-2 rounded-lg mt-6 ${loadingAuth ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700'}`}
              disabled={loadingAuth}
            >
              {loadingAuth ? 'Cadastrando...' : 'Cadastrar'}
            </button>

            {/* Mensagem de Status */}
            {statusMessage.text && (
              <p id="cadastro-status" className={`${statusMessage.type === 'success' ? 'text-green-600' : 'text-red-600'} text-center text-sm text-gray-700`}>
                {statusMessage.text}
              </p>
            )}
          </form>

          {/* Link para Login */}
          <div className="border-t mt-6 pt-6"> {/* Adicionado mt-6 pt-6 para espaçamento */}
            <div className="text-center">
              <p>Já tem uma conta? <Link to="/login" className="underline mb-1">Faça login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;