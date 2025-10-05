

import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl italic font-bold tracking-tight text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-9 mb-1 mr-2 inline-block"
          >
            <i class="fa-solid fa-dumbbell"></i>
            <path d="M96 176C96 149.5 117.5 128 144 128C170.5 128 192 149.5 192 176L192 288L448 288L448 176C448 149.5 469.5 128 496 128C522.5 128 544 149.5 544 176L544 192L560 192C586.5 192 608 213.5 608 240L608 288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352L608 400C608 426.5 586.5 448 560 448L544 448L544 464C544 490.5 522.5 512 496 512C469.5 512 448 490.5 448 464L448 352L192 352L192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464L96 448L80 448C53.5 448 32 426.5 32 400L32 352C14.3 352 0 337.7 0 320C0 302.3 14.3 288 32 288L32 240C32 213.5 53.5 192 80 192L96 192L96 176z" />
          </svg>
          <a href="/">Soro Fitness</a>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="" className="hover:text-blue-600 transition font-medium">
            Início
          </Link>
          <Link
            to="/calculator"
            className="bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 text-white px-5 py-2 rounded-full font-semibold shadow-lg"
          >
            Calcular Agora
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col space-y-4">
          <a
            href="#start"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
          >
            Calcular Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;