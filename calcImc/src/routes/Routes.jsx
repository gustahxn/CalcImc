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

// ...importações mantidas

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

            <section className="py-20 px-6 bg-white">
              <div className="py-4">
                <div className="max-w-6xl mx-auto">
                  <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
                      Descubra mais sobre tudo que temos a oferecer
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Mergulhe nesse mundo de vastas oportunidades, dicas de cuidado e planeje seu próximo passo na busca por uma saúde melhor. Seja <span className="text-blue-600">SoroFitness</span>
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-blue-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Customização</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Personalize facilmente cada aspecto da plataforma para atender às necessidades do seu negócio. Desde ajustes de design até preferências funcionais.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-pink-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Segurança</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Sua privacidade é nossa prioridade. Utilizamos criptografia padrão da indústria e detecção de ameaças em tempo real para manter seus dados protegidos.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-green-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Suporte</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Nossa equipe de suporte especializada está disponível 24/7 para te ajudar. Estamos aqui para garantir que sua experiência seja tranquila.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-purple-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Desempenho</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Desfrute de carregamentos ultrarrápidos e desempenho impecável. Nosso sistema foi projetado para entregar resultados sem lentidão.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-orange-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Alcance Global</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Seja você uma startup ou uma empresa, escale usuários, recursos ou funcionalidades sem perder desempenho.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 p-3 rounded-md flex items-center justify-center mx-auto bg-blue-50 mb-6">
                        {/* ícone */}
                      </div>
                      <h3 className="text-slate-900 text-lg font-semibold mb-3">Comunicação</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Adapte nosso produto às suas necessidades com uma comunicação perfeita para sua equipe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
