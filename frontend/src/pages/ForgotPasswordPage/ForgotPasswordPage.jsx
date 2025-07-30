import React from 'react';
import TopbarBg from '../../components/TopbarBg/TobBarBg.jsx';
import Footer from '../../components/footer/footer.jsx';

/**
 * Componente para exibir uma página "Em Construção".
 * Reutiliza a TopbarBg e o Footer.
 */
const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Topbar */}
      <TopbarBg />

      {/* Conteúdo principal "Em Construção" */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h1 className="text-4xl font-bold text-forestGreen mb-4">Em Breve!</h1>
          <p className="text-gray-700 text-lg mb-6">
            Esta página está atualmente em construção. Estamos trabalhando duro para trazer um conteúdo incrível para você!
          </p>
          <p className="text-gray-600 text-sm">
            Agradecemos sua paciência.
          </p>
          {/* Ícone de Cone de Construção */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-20 h-20 text-forestGreen mx-auto mt-6 animate-bounce"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="15" />
            <line x1="12" y1="18" x2="12" y2="18" />
          </svg>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
