

import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Result from './components/Result';
import './App.css';

function App() {
  const [imc, setImc] = useState(null);

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 transition-colors duration-300">
      <Header />

      <main className="flex flex-col items-center px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Transforme sua vida com uma rotina mais{' '}
              <span className="text-blue-600 italic ">
                saudável
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Calcule seu IMC de forma rápida e precisa para começar sua jornada.
            </p>
        </div>

        <div id="start" className="mt-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 transition-all duration-500">
          <InputForm onCalculate={setImc} />
          <Result imc={imc} />
        </div>
      </main>
    </div>
  );
}

export default App;