import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Footer = () => {
  return (
    <footer className="tracking-wide bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 pt-2 pb-2 px-10">
      <div className="max-w-screen-xl mx-auto text-center justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          <div>
            <Link to="/Home" className="text-slate-400 font-medium text-base mb-2">Home</Link>
          </div>

          <div>
            <h4 className="text-slate-400 font-medium text-base mb-2">Calculadora</h4>
          </div>

          <div>
            <h4 className="text-slate-400 font-medium text-base mb-2">Entrar</h4>
          </div>

          <div>
            <h4 className="text-slate-400 font-medium text-base mb-2">Registro</h4>
          </div>
        </div>

        <div className="border-t text-left border-gray-700 pv-4 pt-6 mt-8">
          <p className="text-slate-400 text-sm">
            © SoroFitness - Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
