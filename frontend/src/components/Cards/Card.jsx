// src/components/Card/Card.jsx
import React from 'react';

  const Card = ({ cardData, category }) => {
    if (!cardData || !category) {
      return null;
    }

    const { title, textContent, image } = cardData;
    const { primaryColor } = category;

    const categoryColors = {
    Engage: {
      name: 'Engage',
      tailwind: 'purpleEngage',
      bg: '#EADBF5', // usado no SVG, cor clara
    },
    Investigate: {
      name: 'Investigate',
      tailwind: 'blueInvestigate',
      bg: '#D7EFF9',
    },
    Act: {
      name: 'Act',
      tailwind: 'orangeAct',
      bg: '#FFE5DA',
    },
  };


  return (
    <div className="w-[300px] rounded-2xl shadow-md overflow-hidden bg-white flex flex-col border border-gray-200">
      {/* Header com SVG de fundo */}
      <div
        className="relative p-6 h-[140px] flex justify-center items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'><path d='M0,75 C50,25 150,25 200,75 C150,125 50,125 0,75 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/><path d='M0,25 C50,-25 150,-25 200,25 C150,75 50,75 0,25 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/></svg>")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Botão da categoria */}
        <span className={`absolute top-2 right-2 bg-${category.primaryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {category.name}
        </span>

        {/* Ícone */}
        <img
          src={image || "/placeholder-question.svg"}
          alt="Ícone da carta"
          className="w-16 h-16"
          style={{
            filter: `drop-shadow(0 0 2px rgba(0,0,0,0.2))`,
          }}
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h2 className={`text-lg font-bold mb-2 text-${category.primaryColor}`}>
          {title}
        </h2>

        <p className="text-sm text-gray-700 line-clamp-3 mb-4">
          {textContent || "Aqui ficará uma descrição..."}
        </p>

        {/* Rodapé */}
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex gap-3">
            <svg className="h-5 w-5 text-red-500 opacity-80 hover:opacity-100" />
            <svg className="h-5 w-5 text-blue-600 opacity-80 hover:opacity-100" />
          </div>
          <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-700 flex items-center">
            Ver mais <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>

  );
};

export default Card;