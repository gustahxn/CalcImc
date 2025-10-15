import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl italic font-bold tracking-tight text-gray-900 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-9 mb-1 mr-2 inline-block fill-blue-600"
          >
            <path d="M96 176C96 149.5 117.5 128 144 128C170.5 128 192 149.5 192 176L192 288L448 288L448 176C448 149.5 469.5 128 496 128C522.5 128 544 149.5 544 176L544 192L560 192C586.5 192 608 213.5 608 240L608 288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352L608 400C608 426.5 586.5 448 560 448L544 448L544 464C544 490.5 522.5 512 496 512C469.5 512 448 490.5 448 464L448 352L192 352L192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464L96 448L80 448C53.5 448 32 426.5 32 400L32 352C14.3 352 0 337.7 0 320C0 302.3 14.3 288 32 288L32 240C32 213.5 53.5 192 80 192L96 192L96 176z" />
          </svg>
          <Link to="/" className="hover:text-blue-600 transition">
            Soro Fitness
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:text-blue-600 transition font-medium"
          >
            Início
          </Link>
          <Link
            to="/calculator"
            className="px-4 py-2 rounded-lg hover:text-blue-600 transition font-medium"
          >
            Calculadora
          </Link>

          {user ? (
            <div className="flex items-center gap-3 ml-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {user.email.split("@")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105 shadow-md"
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-2">
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition font-semibold"
              >
                Entrar
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Criar Conta
              </Link>
            </div>
          )}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition"
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
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col space-y-3">
          <Link
            to="/"
            className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-center font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/calculator"
            className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-center font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculadora
          </Link>

          {user ? (
            <>
              <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {user.email.split("@")[0]}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition shadow-md"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-800 hover:text-blue-600 px-4 py-3 rounded-lg text-center font-semibold transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Criar Conta
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
