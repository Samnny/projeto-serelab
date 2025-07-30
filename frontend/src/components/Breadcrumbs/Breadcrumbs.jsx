// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Breadcrumbs reutilizável para mostrar a hierarquia da navegação.
 * @param {object} props - As propriedades do componente.
 * @param {Array<object>} props.paths - Um array de objetos, onde cada objeto representa um passo na navegação.
 * Ex: [{ label: 'Início', path: '/' }, { label: 'Essential Questioning', path: '/essential-questioning' }]
 */
function Breadcrumbs({ paths }) {
  return (
    <nav className="flex items-center text-gray-500 text-md" aria-label="Breadcrumb">
      {paths.map((item, index) => (
        <span key={item.path || item.label} className="flex items-center">
          {index > 0 && (
            <svg
              className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
          {/* Se for o último item, não é um link */}
          {index === paths.length - 1 ? (
            <span className="font-semibold text-gray-700">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:underline">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;