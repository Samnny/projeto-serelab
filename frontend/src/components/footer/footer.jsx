import "../../style.css";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[url('/assets/home_img/Intersect.svg')] bg-bg_color text-blackCustom py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <img src="/assets/home_img/Frame 20.svg" alt="" className="w-[200px]" />
          <p className="text-xs mt-6">&copy; Serelab 2025</p>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="font-bold text-xl mb-3 text-forestGreen">Designers</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Gabriel Albuquerque */}
                <a
                  href="https://www.linkedin.com/in/gabriel-albuqq"
                  target="_blank" // Abre em uma nova aba
                  rel="noopener noreferrer" // Boa prática de segurança para target="_blank"
                  className="hover:underline text-blackCustom" // Adiciona sublinhado ao passar o mouse e mantém a cor do texto
                >
                  Gabriel Albuquerque
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Clara Oliveira */}
                <a
                  href="https://www.linkedin.com/in/maria-clara-de-oliveira-alexandre-173ba8245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blackCustom"
                >
                  Clara Oliveira
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Letícia Nepomuceno */}
                <a
                  href="https://www.linkedin.com/in/let%C3%ADcia-nepomuceno-b1536b22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blackCustom"
                >
                  Letícia Nepomuceno
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-forestGreen text-xl">Programadores</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Edmara Rocha */}
                <a
                  href="https://www.linkedin.com/in/edmarar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blackCustom"
                >
                  Edmara Rocha
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Jamile Sales */}
                <a
                  href="https://www.linkedin.com/in/jamile-sales?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blackCustom"
                >
                  Jamile Sales
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                {/* Link para o LinkedIn de Samay Pessoa */}
                <a
                  href="https://www.linkedin.com/in/samay-pessoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blackCustom"
                >
                  Samay Pessoa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;