import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Topbar reutilizável para o cabeçalho das páginas.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.navTo - O caminho da rota para onde o link de navegação deve ir.
 * @param {string} props.navText - O texto a ser exibido no link de navegação.
 */
function Topbar({ navTo, navText }) {
  return (
    <div className="w-full backdrop-blur-sm py-6 text-white px-4 md:px-16 flex justify-between items-center mb-10">
      <h1 className="text-4xl font-bold">JOURNEY</h1>
      {/* O Link do React Router para navegação */}
      <Link to={navTo} className="text-base md:text-lg text-right">
        {navText}
      </Link>
    </div>
  );
}

export default Topbar;