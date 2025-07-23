import React, { useState, useMemo } from 'react';
import Card from '../../components/Cards/Card.jsx'; 
import { cardsList, categoriesList } from '../../components/Data/appData';
import Topbar from '../../components/Topbar/Topbar.jsx';

const ITEMS_PER_PAGE = 8; 

const ListCardsPage = () => { 
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const getCardWithCategory = (card) => {
    const category = categoriesList.find(cat => cat.id === card.category);
    return { ...card, categoryData: category };
  };

  const filteredCards = useMemo(() => {
    let list = cardsList.map(getCardWithCategory);

    if (filterCategory !== 'all') {
      list = list.filter(card => card.category === parseInt(filterCategory));
    }

    // Lógica para "Não Lidos" e "Favoritos" ainda precisaria de dados no CardData
    // Ex: list = list.filter(card => card.isRead === false);
    // Ex: list = list.filter(card => card.isFavorite === true);

    return list;
  }, [filterCategory, filterStatus]);

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCards.slice(startIndex, endIndex);
  }, [currentPage, filteredCards]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-green-100">
      <Topbar navTo="/" navText="Voltar para o Início" />

      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Cartas Educativas</h1>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Aqui ficará um breve texto sobre a descrição das cartas educativas, qual o objetivo delas, como você pode interagir com elas e que tipo de informação elas contém. Manter a quebra de duas linhas.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
          <span className="text-gray-700 font-medium">Filtrar por:</span>
          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${filterStatus === 'nao-lidos' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilterStatus('nao-lidos')}
            >
              Não Lidos
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${filterStatus === 'favoritos' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilterStatus('favoritos')}
            >
              Favoritos
            </button>
            <select
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">Fase</option>
              {categoriesList.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <Card
                key={card.id}
                cardData={card}
                category={card.categoryData}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">Nenhum card encontrado com os filtros aplicados.</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Próximo
          </button>
        </div>

        <div className="mt-16 py-4 text-center text-gray-600 text-sm">
          Todos os Direitos Reservados - Equipe Serolab 2025
        </div>
      </div>
    </div>
  );
};

export default ListCardsPage;