  import React, { useState } from 'react';

  const InputForm = ({ onCalculate }) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [error, setError] = useState('');

    const handleAlturaChange = (e) => {
      const inputValue = e.target.value;
      const digitsOnly = inputValue.replace(/[^\d]/g, '');
      const truncatedDigits = digitsOnly.substring(0, 3);

      let formattedValue = truncatedDigits;
      if (truncatedDigits.length > 1) {
        formattedValue = `${truncatedDigits.substring(0, 1)}.${truncatedDigits.substring(1)}`;
      }

      setAltura(formattedValue);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');

      const pesoNum = parseFloat(peso.replace(',', '.'));
      const alturaNum = parseFloat(altura.replace(',', '.'));

      if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
        setError('Por favor, insira valores válidos para peso e altura.');
        return;
      }

      const imc = pesoNum / (alturaNum * alturaNum);
      onCalculate(imc);
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            </div>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-48"
              placeholder="Peso (kg)"
              value={peso}
              maxLength={3}
              max="3"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); 
                if (value.length <= 3) {
                  setPeso(value);
                }
    }}
  />

          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            </div>
            <input
              type="text"
              inputMode="decimal"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Altura (m)"
              value={altura}
              onChange={handleAlturaChange}
            />
          </div>
        </div>
        
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
        >
          Calcular IMC
        </button>
      </form>
    );
  };

  export default InputForm;