import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';
import { cardsList, categoriesList } from '../../components/Data/appData.js';
import Menu from '../../components/menu/menu.jsx';
import TopbarBg from '../../components/TopbarBg/TobBarBg.jsx';
import "../../style.css";

const CardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cardData = useMemo(() => {

    const card = cardsList.find(c => c.id === parseInt(id));
    if (!card) return null;


    const category = categoriesList.find(cat => cat.id === card.category);
    return { ...card, categoryData: category };
  }, [id]);

  const relatedCards = useMemo(() => {
    if (!cardData) return [];
    return cardsList
      .filter(card => card.id !== parseInt(id) && card.category === cardData.category)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(card => ({
        ...card,
        categoryData: categoriesList.find(cat => cat.id === card.category)
      }));
  }, [id, cardData]);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    setIsFavorite(false);
    setIsRead(false);
  }, [id]);

  if (!cardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Carta não encontrada.</p>
        <button
          onClick={() => navigate('/')}
          className="ml-4 px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300"
        >
          Voltar para a lista
        </button>
      </div>
    );
  }

  const markerColor = [cardData.categoryData.hexColor];
  console.log(markerColor);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopbarBg />

      <div className="container mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        {/* Área de Conteúdo Principal do Card */}
        <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {/* Ícone dinâmico do card */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${cardData.categoryData.tailwindColor} mr-3`}>
                {cardData.icon && (
                  <img src={cardData.icon} alt="Ícone da carta" className="w-6 h-6 text-white" />
                )}
                {!cardData.icon && ( // Fallback SVG se não houver ícone
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.228a.75.75 0 000 1.06L9.69 11.69a.75.75 0 001.06 0l1.462-1.462a.75.75 0 000-1.06L10.75 8.25a.75.75 0 00-1.06 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75a.75.75 0 000 1.06l1.462 1.462a.75.75 0 001.06 0l1.462-1.462a.75.75 0 000-1.06L17.25 8.25a.75.75 0 00-1.06 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5z" />
                  </svg>
                )}
              </div>
              {/* Título dinâmico do card */}
              <h1 className={`text-3xl font-black text-${cardData.categoryData.tailwindColor}`}>{cardData.title.replace('\n', ' ')}</h1>
            </div>
            {/* Botão de categoria dinâmico */}
            <button className={`px-4 py-1 rounded-md text-sm font-medium ${cardData.categoryData.tailwindColor} text-white`}>
              {cardData.categoryData.title}
            </button>
          </div>

          {/* Texto principal dinâmico */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {cardData.textContent}
          </p>

          {/* Citação dinâmica */}
          <div className={`bg-gray-100 border-l-4 border-${cardData.categoryData.tailwindColor} p-4 mb-6 rounded-md italic text-gray-800`}>
            <p className="text-lg">
              &ldquo;{cardData.quote}&rdquo;
            </p>
            <p className="text-right text-sm mt-2">CBL Guide, 2023</p>
          </div>

          {/* Imagem/Diagrama dinâmico */}
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 mb-6">
            {cardData.image ? (
              <img src={cardData.image} alt="Diagrama ou Imagem da Carta" className="max-w-full max-h-full object-contain rounded-md" />
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="ml-2">Placeholder para Diagrama/Imagem</span>
              </>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Aqui estão alguns exemplos de aplicação do conceito:
          </p>
          <ul className={`list-disc list-inside text-gray-700 ml-4 color-${cardData.categoryData.tailwindColor}`} style={{ '--marker-color': markerColor }}>
            <style>{`
              .list-disc.list-inside li::marker {
                color: var(--marker-color);
              }
            `}</style>
            {cardData.tips && cardData.tips.length > 0 ? (
              cardData.tips.map((item, index) => (
                <li key={index} className="dynamic-marker-color">
                  <span className={`font-semibold text-${cardData.categoryData.tailwindColor}`}>Exemplo {index + 1}</span> - {item}
                </li>
              ))
            ) : (
              <li>Nenhum exemplo disponível.</li>
            )}
          </ul>
        </div>

        {/* Barra Lateral (Sidebar) */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          {/* Seção de Ações */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-black mb-4">Ações</h2>
            <div className="flex flex-wrap gap-3">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium border ${isFavorite ? 'bg-leafGreen text-white border-leafGreen' : 'border-leafGreen text-leafGreen hover:bg-green-100'}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill={isFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favoritar
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium border ${isRead ? 'bg-leafGreen text-white border-leafGreen' : 'border-leafGreen text-leafGreen hover:bg-green-100'}`}
                onClick={() => setIsRead(!isRead)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {isRead ? 'Lido' : 'Não Lido'}
              </button>
            </div>
          </div>

          {/* Seção de Extras */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-black mb-4">Extras</h2>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M4 8h16M4 12h16M4 16h16" />
                </svg>
                Ver no Diagrama
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver em Caso de Sucesso
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Ir para Documentação do CBL
              </button>
            </div>
          </div>

          {/* Seção de Cards Relacionados */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-black mb-4">Cards Relacionados</h2>
            <div className="flex flex-col gap-4">
              {relatedCards.length > 0 ? (
                relatedCards.map(card => (
                  <Card
                    key={card.id}
                    cardData={card}
                    category={card.categoryData}
                  />
                ))
              ) : (
                <p className="text-gray-600 text-sm">Nenhum card relacionado encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 py-4 text-center text-gray-600 text-sm">
        Todos os Direitos Reservados - Equipe Serolab 2025
      </div>
    </div >
  );
};

export default CardDetailPage;