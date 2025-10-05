import React from "react";
import Header from "../Header";

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

      <button
        onClick={() => (window.location.href = "/")}
        className="px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
      >
        Tela inicial
      </button>
    </div>
  );
};

export default NotFound;
