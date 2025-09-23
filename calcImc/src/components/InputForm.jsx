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
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM229.4 385.9C249.8 413.9 282.8 432 320 432C357.2 432 390.2 413.9 410.6 385.9C418.4 375.2 433.4 372.8 444.1 380.6C454.8 388.4 457.2 403.4 449.4 414.1C420.3 454 373.2 480 320 480C266.8 480 219.7 454 190.6 414.1C182.8 403.4 185.2 388.4 195.9 380.6C206.6 372.8 221.6 375.2 229.4 385.9zM208 272C208 254.3 222.3 240 240 240C257.7 240 272 254.3 272 272C272 289.7 257.7 304 240 304C222.3 304 208 289.7 208 272zM400 240C417.7 240 432 254.3 432 272C432 289.7 417.7 304 400 304C382.3 304 368 289.7 368 272C368 254.3 382.3 240 400 240z"/></svg>
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Peso (kg)"
              value={peso}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, ''); 
                if (value.length <= 6) {
                  setPeso(value);
                }
    }}
  />

          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M72 96C49.9 96 32 113.9 32 136L32 192C32 209.7 46.3 224 64 224C81.7 224 96 209.7 96 192L96 160L160 160L160 480L128 480C110.3 480 96 494.3 96 512C96 529.7 110.3 544 128 544L256 544C273.7 544 288 529.7 288 512C288 494.3 273.7 480 256 480L224 480L224 160L288 160L288 192C288 209.7 302.3 224 320 224C337.7 224 352 209.7 352 192L352 136C352 113.9 334.1 96 312 96L72 96zM470.6 425.4C458.1 412.9 437.8 412.9 425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7L489.3 534.7C501.8 547.2 522.1 547.2 534.6 534.7L598.6 470.7C611.1 458.2 611.1 437.9 598.6 425.4C586.1 412.9 565.8 412.9 553.3 425.4L543.9 434.8L543.9 205.3L553.3 214.7C565.8 227.2 586.1 227.2 598.6 214.7C611.1 202.2 611.1 181.9 598.6 169.4L534.6 105.4C528.6 99.4 520.5 96 512 96C503.5 96 495.4 99.4 489.4 105.4L425.4 169.4C412.9 181.9 412.9 202.2 425.4 214.7C437.9 227.2 458.2 227.2 470.7 214.7L480.1 205.3L480.1 434.8L470.7 425.4z"/></svg>
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