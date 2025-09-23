

import React, { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl italic font-bold tracking-tight text-gray-900">
          <a href="/">Calculadora de IMC Fatec</a>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-blue-600 transition font-medium">Início</a>
          <a
            href="#start"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
          >
            Calcular Agora
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col space-y-4">
           <a href="#start" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center">
             Calcular Agora
           </a>
        </div>
      )}
    </header>
  );
};

export default Header;