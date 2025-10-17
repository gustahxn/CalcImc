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
              <div class="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

        <div class="min-h-[380px] relative z-50 h-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 class="text-white sm:text-4xl text-3xl font-semibold leading-tight mb-6">
            Showcase Your Product or Service in Style
          </h2>
          <p class="text-base text-center text-slate-200 leading-relaxed">
            Highlight what makes your brand unique with a bold, modern banner design.
            Perfect for product launches, service promotions, or portfolio features,
            this layout helps you connect with your audience and inspire them to take action.
            Make your first impression unforgettable.
          </p>
          <button type="button"
            class="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-medium outline-none bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 transition-all duration-300 cursor-pointer">
            Getting started now
          </button>
        </div>
      </div>
            </main>
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
