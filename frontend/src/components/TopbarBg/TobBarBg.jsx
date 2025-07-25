import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Topbar reutilizável para o cabeçalho das páginas.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.navTo - O caminho da rota para onde o link de navegação deve ir.
 * @param {string} props.navText - O texto a ser exibido no link de navegação.
 */
function Topbar({ navTo, navTo2, navTo3, navText, navText2, navText3 }) {
  return (
    <div className="w-full bg-[url('/assets/bg_journey.svg')] py-1.5 text-white px-4 md:px-16 flex justify-between items-center">
      <img src="/assets/logo_journey.svg" alt="" />
      {/* O Link do React Router para navegação */}
      <Link to={navTo} className="text-base md:text-lg text-right">
        {navText}
      </Link>
       <Link to={navTo2} className="text-base md:text-lg text-right">
        {navText2}
      </Link>
       <Link to={navTo3} className="text-base md:text-lg text-right">
        {navText3}
      </Link>
    </div>
  );
}

export default Topbar;