import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implemente a lógica de logout aqui, se necessário
    navigate('/login');
  };

  return (
    <div className="bg-[url('/assets/login_bg.svg')] bg-cover bg-center flex flex-col min-h-screen">
      {/* Topbar */}
      <div className="w-full backdrop-blur-sm py-6 text-white px-4 md:px-16 flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-4xl font-bold">JOURNEY</h1>
        <button
          className="text-base md:text-lg text-right"
          onClick={handleLogout}
        >
          SAIR
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-16">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo à sua jornada!
          </h2>
          <div className="w-full max-w-5xl">
            <img
              src="/assets/from.svg"
              alt="Person standing at the beginning of a winding path with trees and mountains in the background, conveying a sense of anticipation and new beginnings"
              className="w-full object-cover"
            />
          </div>
          <p className="text-gray-600 text-lg">
            Explore desafios e evolua a cada etapa. Boa jornada!
          </p>
        </div>

        <div className="border-t">
          <div className="p-4 text-sm text-center">
            <p>
              Quer aprender mais sobre o CBL?{' '}
              <a
                href="/register"
                className="underline mb-1"
              >
                Acesse as cartas educativas aqui.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;