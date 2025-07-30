import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';
import { cardsList, categoriesList } from '../../components/Data/appData.js';
import Menu from '../../components/menu/menu.jsx';
import TopbarBg from '../../components/TopbarBg/TobBarBg.jsx';
import "../../style.css";
import Footer from '../../components/footer/footer.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

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

  const breadcrumbPaths = [
    { label: 'Início', path: '/home' },
    { label: cardData.title, path: `/cards/${cardData.id}` }, // O card atual, sem link
  ];

  const markerColor = [cardData.categoryData.hexColor];
  console.log(markerColor);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopbarBg />
      {/* <div className="w-full py-4 px-4 md:px-16"> 
        <Breadcrumbs paths={breadcrumbPaths} />
      </div> */}
      <div className="container mx-auto px-4 md:px-16 py-4 mt-8 p-4">
        <Breadcrumbs paths={breadcrumbPaths} />
        <div className="container mx-auto mt-8 flex flex-col lg:flex-row gap-8 mb-12">
          {/* Área de Conteúdo Principal do Card */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className={`w-20 h-16 clip-trapezoid3 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.25)] bg-${cardData.categoryData.tailwindColor} flex items-center justify-center ${cardData.categoryData.tailwindColor} mr-3`}>
                <img src="/assets/Vector.svg" alt="" />
              </div>
              <div className={`flex -ml-10 items-center bg-opacity-15 mt-2 w-full py-3 px-10 clip-trapezoid2 bg-${cardData.categoryData.tailwindColor}`}>
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
            <div className="w-full h-48 rounded-md flex items-center mt-6 justify-center text-gray-500 mb-6">
              <img src="/assets/Group 18.svg" className='mt-16 w-[800px]' alt="" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 mt-20">
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
                  <li key={index} className="dynamic-marker-color py-2">
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
                <button className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300" onClick={() => navigate('/diagram')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M4 8h16M4 12h16M4 16h16" />
                  </svg>
                  Ver no Diagrama
                </button>
                <button className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300" onClick={() => navigate('/success-cases')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ver em Caso de Sucesso
                </button>
                <a
                  href="https://www.challengebasedlearning.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-leafGreen text-white rounded-md hover:bg-forestGreen transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Ir para Documentação do CBL
                </a>
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
      </div>
      <Footer />
    </div >
  );
};

export default CardDetailPage;