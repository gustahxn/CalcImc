import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-2xl italic font-bold tracking-tight">
          <a href="/">Calculadora de IMC Suprema</a>
        </div>  

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>

        </nav>

        <div className="hidden md:block">
          <a
            href="#start"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            Começar
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
