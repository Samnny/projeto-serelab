import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import "../../style.css";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implemente a lógica de logout aqui, se necessário
    navigate('/login');
  };

  return (
    <div className="bg-[url('/assets/login_bg.svg')] bg-cover bg-center flex flex-col min-h-screen">
      <Topbar navTo="/" navText="Voltar para o Início" />

      <div className="flex flex-col items-center gap-12 justify-center flex-grow pl-4 md:pl-16">
          <div className="flex items-center justify-between py-12 relative w-full">
            {/* Imagem à esquerda */}
            <div className="ml-6">
              <img
                src="src/assets/home_img/ChatGPT_Image_24_de_jul._de_2025__17_16_03-removebg-preview 1.svg"
                alt="CBL"
                className=" max-w-full"
              />
            </div>

            {/* Imagem da direita com botão sobre ela */}
            <div className="relative ml-auto mr-0 right-0">
              <img
                src="src/assets/home_img/frame2.svg"
                alt="Fundo Decorativo"
                className=" max-w-full"
              />

              {/* Botão sobreposto à imagem */}
              <div className="absolute bottom-24 left-[154px]">
                <a
                  href="#"
                  className="bg-orangeAct rounded-md px-4 py-2 text-textcolor1 font-medium shadow-[4px_4px_0px_rgba(0,0,0,0.25)]"
                >
                  Cadastre-se agora
                </a>
              </div>
            </div>
          </div>


          <div className="flex flex-col justify-center items-center py-12 pr-4 md:pr-16">
              <div>
                <img src="src/assets/home_img/Group 29.svg" alt="" className="w-[500px]"/>
              </div>
              <div className="flex justify-center items-center">
                <p className='text-textcolor1 text-xl text-center w-2/4'>
                  É uma <strong>metodologia prática</strong> que envolve os alunos na resolução de desafios reais. Eles colaboram para identificar grandes ideias, formular perguntas e desenvolver soluções.
                </p>
              </div>
          </div>
          <div className='pr-4 md:pr-16'>
            <div className='flex justify-center items-center mb-24'>
              <img src="src\assets\home_img\Frame 321.svg" alt="" className='w-[400px'/>
            </div>
            <div className='flex justify-between gap-20 items-center mb-6'>
              <img src="src\assets\home_img\Frame 320.svg" alt="" className='w-[650px]'/>
              <div className='text-textcolor1'>
                <h1 className='font-bold mb-4 text-4xl'>Cartas Educativas</h1>
                <p className='text-lg'>Explore cada fase do CBL de forma prática e dinâmica. Cada carta educativa oferece explicações com <strong>exemplos reais</strong> e <strong>dicas de aplicação</strong> para garantir aprendizado de maneira engajada e eficaz. </p>
              </div>
            </div>
            <div className='flex justify-between gap-36 items-center mb-6'>
              <div className='text-textcolor1'>
                <h1 className='font-bold mb-4 text-4xl'>Mapa educacional</h1>
                <p className='text-lg'>Navegue por um <strong>diagrama interativo</strong> que explica, de maneira simples, o fluxo do CBL. É a chave para compreender a estrutura da metodologia de forma eficiente, ajudando você a planejar e aplicar o aprendizado com confiança.</p>
              </div>
              <img src="src\assets\home_img\Frame 324.svg" alt="" className='w-[650px]'/>
            </div>
            <div className='flex justify-between gap-20 items-center'>
              <img src="src\assets\home_img\Frame 329.svg" alt="" className='w-[650px]'/>
              <div className='text-textcolor1'>
                <h1 className='font-bold mb-4 text-4xl'>Trilhas de História</h1>
                <p className='text-lg'>Com as Trilhas de História, você aprende passo a passo de forma amigável e inspiradora. Enquanto é guiado a partir de <strong>narrativas</strong> que conectam <strong>teoria à prática</strong>, tornando o processo de aprendizagem mais imersivo e estimulante.</p>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-bgBloco py-12'>
        <div className='px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-blackCustom text-sm'>
          <div className='border-l-4 border-purpleEngage px-2'>
              <p>“90% dos educadores afirmam que o CBL aprimora habilidades como liderança, criatividade e resolução de problemas.”</p>
              <p className='text-xs mt-4'>Fonte: <a className='underline' href="https://www.challengebasedlearning.org/wp-content/uploads/2019/05/CBL_implementation_report.pdf">CBL Implementation Project</a></p>
          </div>
          <div className='border-l-4 border-blueInvestigate px-2'>
              <p>“90% dos educadores "Universidades do México, Irlanda e China adotam a metodologia para formar profissionais mais preparados."</p>
              <p className='text-sm mt-4'>Fonte: <a className='underline' href="https://www.mdpi.com/2227-7102/13/3/234">Taking the Challenge</a></p>
          </div>
          <div className='border-l-4 border-orangeAct px-2'>
              <p>“Desenvolvida pela Apple, a metodologia CBL prepara alunos para enfrentar desafios sociais e ambientais.”</p>
              <p className='text-sm mt-4'>Fonte: <a className='underline' href="https://www.challengebasedlearning.org/">Challenge Based Learning</a></p>
          </div>
        </div>
      </div>
      <div className='py-16 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-bg_color font-extrabold text-5xl text-center leading-loose mb-12'>
              Está pronto para <br /> começar a jornada?
            </p>
            <a className='bg-bg_color text-forestGreen text-xl rounded-full shadow-[2px_4px_0px_rgba(0,0,0,0.25)] px-6 py-4 font-medium' href="">Inicie o desafio</a>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;