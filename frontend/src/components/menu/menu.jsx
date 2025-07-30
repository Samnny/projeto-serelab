import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style.css";

function Menu() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  // Atualiza o ativo ao clicar
  const handleClick = (path) => {
    setActivePath(path);
  };

  const links = [
    { path: "/home", label: "Cartas" },
    { path: "/diagram", label: "Diagrama" },
    { path: "/success-cases", label: "Casos de Sucesso" },
    { path: "/storytelling", label: "História" },
  ];

  return (
    <div className="w-full bg-forestGreen py-2 text-white px-4 md:px-16 flex justify-between items-center mb-10">
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={() => handleClick(path)}
          className={`text-white px-24 py-1 transition-all clip-trapezoid duration-300
            ${
              activePath === path
                ? "clip-trapezoid bg-leafGreen"
                : "hover:clip-trapezoid hover:bg-leafGreen"
            }
          `}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
