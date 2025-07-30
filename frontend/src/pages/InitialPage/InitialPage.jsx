import React, { useState, useMemo, useEffect } from 'react';
import Card from '../../components/Card/Card.jsx';
import { cardsList, categoriesList } from '../../components/Data/appData.js';
import Menu from '../../components/menu/menu.jsx';
import "../../style.css";
import TopbarBg from '../../components/TopbarBg/TobBarBg.jsx';
import Footer from '../../components/footer/footer.jsx';

const ITEMS_PER_PAGE = 8;

const InitialPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'nao-lidos', 'favoritos'
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para a barra de pesquisa

  // Estado para gerenciar favoritos e lidos.
  // Usaremos um objeto onde a chave é o card.id e o valor é um objeto { isFavorite: bool, isRead: bool }
  const [cardStates, setCardStates] = useState(() => {
    // Inicializa o estado dos cards a partir de cardsList
    const initialStates = {};
    cardsList.forEach(card => {
      initialStates[card.id] = {
        isFavorite: card.isFavorite || false, // Assume false se não definido
        isRead: card.isRead || false // Assume false se não definido
      };
    });
    return initialStates;
  });

  // Função auxiliar para adicionar dados de categoria e o estado atual aos cards
  const getCardWithCategoryAndState = (card) => {
    const category = categoriesList.find(cat => cat.id === card.category);
    const state = cardStates[card.id] || { isFavorite: false, isRead: false };
    return {
      ...card,
      categoryData: category,
      isFavorite: state.isFavorite,
      isRead: state.isRead
    };
  };

  // Memoiza os cards filtrados para evitar recálculos desnecessários
  const filteredCards = useMemo(() => {
    let list = cardsList.map(getCardWithCategoryAndState); // Usa a nova função auxiliar

    // 1. Filtrar por categoria
    if (filterCategory !== 'all') {
      list = list.filter(card => card.category === parseInt(filterCategory));
    }

    // 2. Filtrar por status (Não Lidos / Favoritos)
    if (filterStatus === 'nao-lidos') {
      list = list.filter(card => !card.isRead);
    } else if (filterStatus === 'favoritos') {
      list = list.filter(card => card.isFavorite);
    }

    // 3. Filtrar por termo de pesquisa (APENAS PELO TÍTULO DO CARD)
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      list = list.filter(card =>
        card.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return list;
  }, [filterCategory, filterStatus, searchTerm, cardStates]); // Adicione cardStates às dependências

  // Resetar a página atual para 1 sempre que os filtros ou termo de pesquisa mudarem
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, filterStatus, searchTerm]);

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

  // Função para alternar o status do filtro (ativar/desativar livremente)
  const toggleFilterStatus = (status) => {
    setFilterStatus(prevStatus => (prevStatus === status ? 'all' : status));
  };

  // Funções para alternar o estado de favorito/lido de um card específico
  const onToggleFavorite = (cardId) => {
    setCardStates(prevStates => ({
      ...prevStates,
      [cardId]: {
        ...prevStates[cardId],
        isFavorite: !prevStates[cardId].isFavorite
      }
    }));
  };

  const onToggleRead = (cardId) => {
    setCardStates(prevStates => ({
      ...prevStates,
      [cardId]: {
        ...prevStates[cardId],
        isRead: !prevStates[cardId].isRead
      }
    }));
  };

  return (
    <div className="min-h-screen bg-bg">
      <TopbarBg />
      <Menu/>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between mb-4">
            <h1 className="text-4xl text-forestGreen mb-2 font-black">Cartas Educativas</h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-gray-700 font-medium">Filtrar por:</span>
              <div className="flex items-center gap-3">
                <button
                  className={`px-4 py-1 rounded-md text-sm font-medium border ${filterStatus === 'nao-lidos' ? 'bg-leafGreen text-white border-leafGreen' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => toggleFilterStatus('nao-lidos')} // Usa a nova função de toggle
                >
                  Não Lidos
                </button>
                <button
                  className={`px-4 py-1 rounded-md text-sm font-medium border ${filterStatus === 'favoritos' ? 'bg-leafGreen text-white border-leafGreen' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => toggleFilterStatus('favoritos')} // Usa a nova função de toggle
                >
                  Favoritos
                </button>
                <select
                  className="px-4 py-1 rounded-md text-sm font-medium text-gray-700 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-leafGreen"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">Fase (Todas)</option> {/* Mudado para ser mais explícito */}
                  {categoriesList.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                  <input
                    type="text"
                    placeholder='Pesquisar...'
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-leafGreen"
                    value={searchTerm} // Controla o valor do input
                    onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado ao digitar
                  />
              </div>
            </div>
        </div>
        <p className="text-forestGreen mb-6 w-full">
          Consulte os principais conceitos em que o Challenge Based Learning (CBL) se baseia, cada carta aborda um assunto das três fases da que compõem a metodologia o Engage, o Investigate e o Act, além de uma categoria geral que explica o CBL.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <Card
                key={card.id}
                cardData={card}
                category={card.categoryData}
                // Passa as funções de toggle para o componente Card
                onToggleFavorite={onToggleFavorite}
                onToggleRead={onToggleRead}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">Nenhum card encontrado com os filtros aplicados.</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-10 mb-12 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-leafGreen clip-trapezoid text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-forestGreen transition-colors duration-300"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${currentPage === page ? 'bg-leafGreen text-white' : 'text-forestGreen hover:bg-gray-200'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-2 bg-leafGreen clip-trapezoid text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-forestGreen transition-colors duration-300"
          >
            Próximo
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InitialPage;