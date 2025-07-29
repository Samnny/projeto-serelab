import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Topbar reutilizável para o cabeçalho das páginas.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.navTo - O caminho da rota para onde o link de navegação deve ir.
 * @param {string} props.navText - O texto a ser exibido no link de navegação.
 */
function Topbar({ navTo1, navTo2, navTo3, navText1, navText2, navText3 }) {
  return (
    <div className="w-full py-1.5 text-white px-4 md:px-16 flex justify-between items-center">
      <Link to="/">
        <img src="/assets/logo_journey.svg" alt="Logo Journey" />
      </Link>
      {/* O Link do React Router para navegação */}
      <div className='flex items-center justify-between gap-8'>
         <a href={navTo1} className="text-base md:text-lg text-cream font-bold text-right hover:underline">
          {navText1}
        </a>
        <Link to={navTo2} className="bg-orangeAct text-cream px-4 py-2 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.25)] text-base md:text-lg text-right">
          {navText2}
        </Link>
        <Link to={navTo3} className="bg-cream text-forestGreen px-4 py-2 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.25)] text-base md:text-lg text-right">
          {navText3}
        </Link>
      </div>
    </div>
  );
}

export default Topbar;