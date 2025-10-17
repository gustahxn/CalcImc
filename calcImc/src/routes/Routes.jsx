import React from "react";
import { Routes, Route } from "react-router-dom";
import InputForm from "../components/InputForm";
import Home from "../components/Home";
import Result from "../components/Result";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/Signup";
import FeatureSection from "../components/FeatureSection";
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

              <div className="mb-20 mt-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
                <InputForm onCalculate={setImc} />
              </div>
              <FeatureSection />
            </main>
          </PrivateRoute>
        }
      />

      <Route
        path="/result"
        element={
          <PrivateRoute>
            <main className="flex flex-col items-center px-4 py-12 sm:py-16">
              <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl mb-20 p-8 transition-all duration-500">
                <Result imc={imc} />
              </div>
              <FeatureSection />
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
