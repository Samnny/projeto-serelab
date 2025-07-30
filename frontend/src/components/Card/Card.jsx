import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ cardData, category }) => {
  const navigate = useNavigate();

  if (!cardData || !category) {
    return null;
  }

  const { title, textContent, icon, image } = cardData;
  const { tailwindColor } = category;

  // const categoryColors = {
  //   Engage: {
  //     name: 'Engage',
  //     tailwind: 'purpleEngage',
  //     bg: '#EADBF5', // usado no SVG, cor clara
  //   },
  //   Investigate: {
  //     name: 'Investigate',
  //     tailwind: 'blueInvestigate',
  //     bg: '#D7EFF9',
  //   },
  //   Act: {
  //     name: 'Act',
  //     tailwind: 'orangeAct',
  //     bg: '#FFE5DA',
  //   },
  // };

  const handleViewMore = () => {
    navigate(`/cards/${cardData.id}`);
  };

  return (
    <div className="w-[300px] rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden bg-white flex flex-col border border-gray-200">
      {/* Header com SVG de fundo */}
      <div
        className="relative h-[140px] flex justify-center items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'><path d='M0,75 C50,25 150,25 200,75 C150,125 50,125 0,75 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/><path d='M0,25 C50,-25 150,-25 200,25 C150,75 50,75 0,25 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/></svg>")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Botão da categoria */}
        <span className={`absolute top-2 right-2 z-10 bg-${tailwindColor} text-white text-xs font-semibold px-3 py-1 rounded-md`} style={{ backgroundColor: tailwindColor }}>
          {category.title}
        </span>

        {/* Ícone */}
        <img
          src={icon || "/assets/bg-card.svg"}
          alt="Ícone da carta"
          className="w-full object-cover"
          style={{
            
          }}
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-5 flex flex-col justify-mt-2 between flex-grow">
        <h2 className={`text-lg font-bold mb-2 mt-4 text-${tailwindColor}`} style={{ color: tailwindColor }}>
          {title}
        </h2>

        <p className="text-sm text-gray-700 line-clamp-3 mb-4">
          {textContent || "Aqui ficará uma descrição..."}
        </p>

        {/* Rodapé */}
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex gap-3">
            {/* Ícone de Coração (Favoritar) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-${tailwindColor} opacity-80 hover:opacity-100 cursor-pointer`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>

            {/* Ícone de Alvo/Olho (Visualizar/Lido) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-${tailwindColor} opacity-80 hover:opacity-100 cursor-pointer`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          {/* Botão "Ver mais" */}
          <button
            onClick={handleViewMore}
            className={`text-sm font-medium text-${tailwindColor} hover:font-bold flex items-center cursor-pointer bg-transparent border-none p-0`}
          >
            Ver mais <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div >
  );
};

export default Card;