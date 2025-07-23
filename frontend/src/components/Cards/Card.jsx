// src/components/Card/Card.jsx
import React from 'react';

const Card = ({ cardData, category }) => {
  if (!cardData || !category) {
    return null;
  }

  const { title, textContent, image } = cardData;
  const { primaryColor } = category;

  const darkenColor = (hex, percent) => {
    let f = parseInt(hex.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff;
    return (
      "#" +
      (
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
      )
        .toString(16)
        .slice(1)
    );
  };

  const headerBgColor = darkenColor(primaryColor, -0.1);

  return (
    <div
      className="card-container w-[300px] rounded-2xl shadow-lg overflow-hidden flex flex-col"
      style={{ backgroundColor: primaryColor }}
    >
      <div
        className="card-header p-5 pb-2 flex justify-between items-start text-white relative z-10"
        style={{ backgroundColor: headerBgColor }}
      >
        <h2 className="card-title text-2xl font-bold leading-tight m-0">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <button className="card-engage-button bg-white bg-opacity-30 text-white border border-white border-opacity-50 px-4 py-2 rounded-full text-sm cursor-pointer transition-colors duration-300 hover:bg-opacity-50">
          Engage
        </button>
      </div>

      <div
        className="card-image-placeholder bg-gray-100 p-8 flex justify-center items-center h-[150px] relative overflow-hidden -mt-2 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'><path d='M0,75 C50,25 150,25 200,75 C150,125 50,125 0,75 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/><path d='M0,25 C50,-25 150,-25 200,25 C150,75 50,75 0,25 Z' fill='${encodeURIComponent(category.secondColor)}' opacity='0.4'/></svg>")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img
          src={image || '/placeholder-question.svg'}
          alt="Placeholder"
          className="w-20 h-20 text-indigo-500"
          style={{ filter: `invert(50%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(100%) contrast(100%)` }}
        />
      </div>

      <div className="card-body p-5 bg-white rounded-b-2xl flex flex-col justify-between flex-grow">
        <p className="card-description text-base leading-relaxed mb-5 line-clamp-3 min-h-[72px]">
          {textContent || "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas."}
        </p>
        <div className="card-footer flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="card-actions flex gap-4">
            <svg className="h-6 w-6 text-red-500 cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" clipRule="evenodd" />
            </svg>
            <svg className="h-6 w-6 text-blue-600 cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4.5c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
            </svg>
          </div>
          <a href="#" className="card-more-link text-indigo-500 font-bold text-base flex items-center transition-colors duration-300 hover:text-indigo-700">
            Ver mais
            <span className="arrow-icon ml-1 text-lg leading-none">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;