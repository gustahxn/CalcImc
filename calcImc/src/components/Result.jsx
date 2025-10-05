import React from "react";
import { Link } from "react-router-dom";

const Result = ({ imc }) => {
  const getClassification = (imcValue) => {
    if (imcValue < 18.5) return "Abaixo do peso";
    if (imcValue < 25) return "Peso normal";
    if (imcValue < 30) return "Sobrepeso";
    if (imcValue < 35) return "Obesidade (Classe I)";
    if (imcValue < 40) return "Obesidade (Classe II)";
    return "Obesidade (Classe III)";
  };

  const getResultStyle = (imcValue) => {
    if (imcValue < 18.5) {
      return {
        className: "bg-yellow-100 text-yellow-800 border-yellow-400",
        message:
          "Você está abaixo do peso ideal. Considere procurar já um nutricionista.",
      };
    }
    if (imcValue < 25) {
      return {
        className: "bg-green-100 text-green-800 border-green-400",
        message:
          "Parabéns! Você está com o peso ideal. Mantenha o bom trabalho!",
      };
    }
    if (imcValue < 30) {
      return {
        className: "bg-orange-100 text-orange-800 border-orange-400",
        message:
          "Você está com sobrepeso. Pequenas mudanças no estilo de vida podem ajudar.",
      };
    }
    if (imcValue < 35) {
      return {
        className: "bg-red-100 text-red-900 border-orange-500",
        message:
          "Você está com obesidade grau I. Comece a considerar mudanças no estilo de vida e consulte um especialista.",
      };
    }
    if (imcValue < 40) {
      return {
        className: "bg-red-200 text-red-900 border-orange-600",
        message:
          "Você está com obesidade grau II. É importante procurar orientação médica o quanto antes.",
      };
    }
    return {
      className: "bg-red-300 text-red-800 border-red-400",
      message:
        "Você está com obesidade grau III. Busque acompanhamento médico especializado imediatamente.",
    };
  };

  if (imc === null) {
    return null;
  }

  const classification = getClassification(imc);
  const style = getResultStyle(imc);

  return (
    <>
      <div
        className={`mt-8 p-6 rounded-lg border-l-4 transition-all duration-500 animate-fade-in ${style.className}`}
      >
        <h2 className="text-2xl font-semibold mb-2">Seu Resultado</h2>
        <div className="flex items-baseline justify-center gap-2">
          <p className="text-5xl font-bold">{imc.toFixed(2)}</p>
          <p className="text-lg">IMC</p>
        </div>
        <p className="text-xl font-semibold mt-2">{classification}</p>
        <p className="mt-4 text-sm">{style.message}</p>
      </div>

      <div className="flex justify-center mt-6">
        <Link 
          to={"/calculator"}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
        >
          Voltar
        </Link>
      </div>
    </>
  );
};

export default Result;
