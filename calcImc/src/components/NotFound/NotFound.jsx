import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <h1 className="text-2xl font-bold mb-4 mt-20">
        Poxa... o conteúdo que você procura não está aqui :(
      </h1>
      <img
        src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2692-thumb.png"
        alt="404"
        className="w-32 h-32 mb-4"
      />

      <Link
        to={"/calculator"}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
      >
        Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;
