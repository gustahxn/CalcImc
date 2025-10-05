import React from "react";
import { Routes, Route } from "react-router-dom";
import InputForm from "../components/InputForm";
import Result from "../components/Result";
import NotFound from "../components/NotFound/NotFound";

const AppRoutes = ({ setImc, imc }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="flex flex-col items-center px-4 py-12 sm:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                Transforme sua vida com uma rotina mais{" "}
                <span className="text-blue-600 italic">saudável</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 font-semibold">
                Calcule seu IMC de forma rápida e precisa para começar sua
                jornada.
              </p>
            </div>

            <div className="mt-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
              <InputForm onCalculate={setImc} />
            </div>
          </main>
        }
      />
      <Route
        path="/result"
        element={
          <main className="flex flex-col items-center px-4 py-12 sm:py-16">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
              <Result imc={imc} />
            </div>
          </main>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
