import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Topbar reutilizável para o cabeçalho das páginas.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.navTo - O caminho da rota para onde o link de navegação deve ir.
 * @param {string} props.navText - O texto a ser exibido no link de navegação.
 */
function TopbarBg({ navTo, navTo2, navTo3, navText, navText2, navText3 }) {
  return (
    <div className="w-full bg-[url('/assets/bg_journey.svg')] py-1.5 text-white px-4 md:px-16 flex justify-between items-center">
      <Link to="/">
        <img src="/assets/logo_journey.svg" alt="Logo Journey" />
      </Link>
      {/* O Link do React Router para navegação */}
      <Link to={navTo} className="text-base md:text-lg text-right">
        {navText}
      </Link>
    </div>
  );
}

export default TopbarBg;