import React, { useState, useMemo } from 'react';
import Card from '../../components/Cards/Card.jsx'; 
import { cardsList, categoriesList } from '../../components/Data/appData';
import Topbar from '../../components/Topbar/Topbar.jsx';
import Menu from '../../components/menu/menu.jsx';
import "../../style.css";

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
    <div className="min-h-screen bg-bg">
      <Topbar navTo="/" navText="Voltar para o Início" />
      <Menu/>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between mb-4">
            <h1 className="text-4xl text-forestGreen mb-2 font-black">Cartas Educativas</h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-gray-700 font-medium">Filtrar por:</span>
              <div className="flex items-center gap-3">
                <button
                  className={`px-4 py-1 rounded-md text-sm font-medium ${filterStatus === 'nao-lidos' ? 'border text-white bg-gray-300' : 'border text-gray-700'}`}
                  onClick={() => setFilterStatus('nao-lidos')}
                >
                  Não Lidos
                </button>
                <button
                  className={`px-4 py-1 rounded-md text-sm font-medium ${filterStatus === 'favoritos' ? 'border text-white bg-gray-300' : 'border text-gray-700'}`}
                  onClick={() => setFilterStatus('favoritos')}
                >
                  Favoritos
                </button>
                <select
                  className="px-4 py-1 rounded-md text-sm font-medium text-gray-700 border focus:outline-none"
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
              <div className="">
                  <input type="text" placeholder='Pesquisar...' className="border rounded-md px-3 py-1"/>
              </div>
            </div>
        </div>
        <p className="text-forestGreen mb-6 w-full">
          Consulte os principais conceitos em que o Challenge Based Learning (CBL) se baseia, cada carta aborda um assunto das três fases da que compõem a metodologia o Engage, o Investigate e o Act, além de uma categoria geral que explica o CBL.        
          </p>

        

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
            className="px-4 py-2 bg-leafGreen clip-trapezoid text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page ? ' text-forestGreen' : 'text-forestGreen hover:bg-gray-300'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-2 bg-leafGreen clip-trapezoid text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
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