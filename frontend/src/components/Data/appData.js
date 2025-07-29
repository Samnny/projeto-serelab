import CardData from './CardData';
import Category from './Category';

// --- CATEGORIES ---
const categoriesList = [
  new Category(0, "Engage", "purpleEngage", "#DBD1EB", "A fase de Engage é onde os alunos são introduzidos ao tema e começam a."),
  new Category(1, "Investigate", "blueInvestigate", "#D9EFF5", "A fase de Investigate é onde os alunos exploram o tópico profundamente."),
  new Category(2, "Act", "orangeAct", "#FADECB", "A fase de Act é onde os alunos aplicam seus conhecimentos em projetos práticos.")
];

// --- CARDS ---
const cardsList = [
  new CardData(0, "Essential\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 0, "Aqui ficará um breve texto sobre a explicação do conceito, assim como sua importância na fase a que ele pertence, mantendo a quebra de até quatro linhas o Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.", "Aqui ficará uma citação em destaque do Guia CBL que seja importante para o entendimento do conceito manter quebra de três linhas", ["O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.", "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.", "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."], "/assets/engage-card.svg", "/assets/bg-card.svg", ["educação", "questionamento", "aprendizado"]),
  new CardData(1, "Guiding\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 1, "Texto para o Guiding Questioning, focado em ajudar os alunos a refinar suas perguntas.", "Citação sobre questionamento guiado.", ["Dica 1", "Dica 2"], "/assets/investigate-card.svg", "/assets/bg-card.svg", ["orientação", "pesquisa"]),
  new CardData(2, "Essential\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 0, "Mais conteúdo sobre Essential Questioning, com foco em sua relevância inicial.", "Outra citação sobre a essência das perguntas.", ["Aprofundamento", "Prática"], "/assets/engage-card.svg", "/assets/bg-card.svg", ["fundamentos", "início"]),
  new CardData(3, "Solution\nDevelopment", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 2, "Descrição do desenvolvimento de soluções, como transformar ideias em realidade.", "Citação sobre ação e inovação.", ["Planejamento", "Execução"], "/assets/act-card.svg", "/assets/act-card.svg", ["projeto", "implementação"]),
  new CardData(4, "Guiding\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 1, "Guiding Questioning para projetos complexos, ajudando a quebrar problemas.", "Citação sobre a importância do direcionamento.", ["Feedback", "Iteração"], "/assets/investigate-card.svg", "/assets/bg-card.svg", ["metodologia", "descoberta"]),
  new CardData(5, "Solution\nDevelopment", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 2, "Como refinar e apresentar soluções desenvolvidas, focando na comunicação.", "Citação sobre impacto.", ["Apresentação", "Validação"], "/assets/act-card.svg", "/assets/act-card.svg", ["comunicação", "impacto"]),
  new CardData(6, "Guiding\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 1, "Técnicas avançadas de Guiding Questioning para estimular o pensamento crítico.", "Citação sobre pensamento crítico.", ["Debate", "Análise"], "/assets/investigate-card.svg", "/assets/investigate-card.svg", ["habilidade", "reflexão"]),
  new CardData(7, "Essential\nQuestioning", "Aqui ficará uma descrição do conceito abordado na carta, com uma quebra de três linhas.", 0, "Revisão dos fundamentos do Essential Questioning para reforçar o aprendizado.", "Citação final sobre a importância da pergunta.", ["Revisão", "Fixação"], "/assets/engage-card.svg", "/assets/bg-card.svg", ["revisão", "conceitos"]),
];

export { cardsList, categoriesList };