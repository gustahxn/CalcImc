import React from 'react';

export default function Navbar() {
  return (
    <nav className="
      fixed top-4 left-1/2 transform -translate-x-1/2
      bg-white bg-opacity-70 backdrop-blur-md
      rounded-3xl
      shadow-lg
      w-[90%] max-w-xl
      z-50
      px-6 py-3
      flex justify-between items-center
    ">
      <h1 className="text-xl font-bold">MeuApp</h1>
      <ul className="flex space-x-8 text-gray-700 font-medium cursor-pointer">
        <li className="hover:text-gray-900 transition">Home</li>
        <li className="hover:text-gray-900 transition">Sobre</li>
        <li className="hover:text-gray-900 transition">Contato</li>
      </ul>
    </nav>
  );
}
