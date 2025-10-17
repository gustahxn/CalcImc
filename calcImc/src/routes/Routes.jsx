import React from "react";
import { Routes, Route } from "react-router-dom";
import InputForm from "../components/InputForm";
import Home from "../components/Home";
import Result from "../components/Result";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = ({ setImc, imc }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/calculator"
        element={
          <PrivateRoute>
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
            <div class="mt=16 flex items-start max-w-screen-lg mx-auto">
                <div class="w-full">
                  <div class="flex items-center w-full">
                    <div class="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
                      <span class="text-sm text-white font-semibold">1</span>
                    </div>
                    <div class="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                  </div>
                  <div class="mt-2 mr-4">
                    <h6 class="text-sm font-semibold text-blue-600">Buscar ajuda</h6>
                    <p class="text-xs text-black">Completado!</p>
                  </div>
                </div>
                <div class="w-full">
                  <div class="flex items-center w-full">
                    <div class="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
                      <span class="text-sm text-white font-semibold">2</span>
                    </div>
                    <div class="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                  </div>
                  <div class="mt-2 mr-4">
                    <h6 class="text-sm font-semibold text-blue-600">Criar conta</h6>
                    <p class="text-xs text-black">Completado!</p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center">
                    <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-600 flex items-center justify-center rounded-full">
                      <span class="text-sm text-white font-semibold">3</span>
                    </div>
                  </div>
                  <div class="mt-2">
                    <h6 class="text-sm font-semibold text-blue-600">Calcular IMC</h6>
                    <p class="text-xs text-black">Em progresso...</p>
                  </div>
                </div>
              </div>
          </PrivateRoute>
        }
      />

      <Route
        path="/result"
        element={
          <PrivateRoute>
            <main className="flex flex-col items-center px-4 py-12 sm:py-16">
              <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
                <Result imc={imc} />
              </div>
            </main>
          </PrivateRoute>
        }
      />

      <Route path="/footer" element={<Footer />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
