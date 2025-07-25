import "../../style.css";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[url('src/assets/home_img/Intersect.svg')] bg-bg_color text-blackCustom py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <img src="src/assets/home_img/Frame 20.svg" alt="" className="w-[200px]" />
          <p className="text-xs mt-6">&copy; Serelab 2025</p>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="font-bold text-xl mb-3 text-forestGreen">Designers</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                <span>Gabriel Albuquerque</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                <span>Clara Oliveira</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                <span>Letícia Nepomuceno</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-forestGreen text-xl">Programadores</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                <span>Edmara Rocha</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-forestGreen text-2xl" />
                <span>Jamile Sales</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text- text-2xl" />
                <span>Samay Pessoa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

