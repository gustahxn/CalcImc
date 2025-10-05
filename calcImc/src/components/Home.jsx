import React from "react";

const Home = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M320 96C338.8 96 354.6 107.5 360.7 124.3L384 192L448 192C483.3 192 512 220.7 512 256C512 291.3 483.3 320 448 320L426.7 320L469.3 457.6C478.4 487.2 459.8 518.4 430.2 527.5C400.6 536.6 369.4 518 360.3 488.4L320 358.4L279.7 488.4C270.6 518 239.4 536.6 209.8 527.5C180.2 518.4 161.6 487.2 170.7 457.6L213.3 320L192 320C156.7 320 128 291.3 128 256C128 220.7 156.7 192 192 192L256 192L279.3 124.3C285.4 107.5 301.2 96 320 96z" />
        </svg>
      ),
      title: "Cálculo Preciso",
      description:
        "Algoritmo baseado nas diretrizes da OMS para resultados confiáveis",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M192 96C192 78.3 206.3 64 224 64C241.7 64 256 78.3 256 96L256 224L288 224C305.7 224 320 238.3 320 256C320 273.7 305.7 288 288 288L256 288L256 448C256 465.7 241.7 480 224 480C206.3 480 192 465.7 192 448L192 288L160 288C142.3 288 128 273.7 128 256C128 238.3 142.3 224 160 224L192 224L192 96zM352 256C352 238.3 366.3 224 384 224L480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288L384 288C366.3 288 352 273.7 352 256zM480 352C497.7 352 512 366.3 512 384C512 401.7 497.7 416 480 416L384 416C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352L480 352z" />
        </svg>
      ),
      title: "Resultados Instantâneos",
      description: "Descubra sua classificação de IMC em segundos",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224 256C224 238.3 238.3 224 256 224L384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288L256 288C238.3 288 224 273.7 224 256zM256 160L224 160C206.3 160 192 145.7 192 128C192 110.3 206.3 96 224 96L256 96 288 96 320 96C337.7 96 352 110.3 352 128C352 145.7 337.7 160 320 160L288 160 256 160zM320 480C337.7 480 352 494.3 352 512C352 529.7 337.7 544 320 544L288 544 256 544 224 544C206.3 544 192 529.7 192 512C192 494.3 206.3 480 224 480L256 480 288 480 320 480zM160 416L128 416C110.3 416 96 401.7 96 384C96 366.3 110.3 352 128 352L160 352 192 352C209.7 352 224 366.3 224 384C224 401.7 209.7 416 192 416L160 416zM448 352L480 352 512 352C529.7 352 544 366.3 544 384C544 401.7 529.7 416 512 416L480 416 448 416C430.3 416 416 401.7 416 384C416 366.3 430.3 352 448 352z" />
        </svg>
      ),
      title: "Orientações Personalizadas",
      description: "Receba recomendações específicas para sua faixa de IMC",
    },
  ];

  const imcRanges = [
    { range: "< 18.5", category: "Abaixo do peso", color: "bg-yellow-500" },
    { range: "18.5 - 24.9", category: "Peso normal", color: "bg-green-500" },
    { range: "25 - 29.9", category: "Sobrepeso", color: "bg-orange-500" },
    { range: "30 - 34.9", category: "Obesidade Grau I", color: "bg-red-400" },
    { range: "35 - 39.9", category: "Obesidade Grau II", color: "bg-red-500" },
    { range: "≥ 40", category: "Obesidade Grau III", color: "bg-red-600" },
  ];

  const handleCalculateClick = () => {

    window.location.href = "/calculator";
  };

  const scrollToInfo = () => {
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-20 h-20 mx-auto text-blue-500"
                fill="currentColor"
              >
                <path d="M96 176C96 149.5 117.5 128 144 128C170.5 128 192 149.5 192 176L192 288L448 288L448 176C448 149.5 469.5 128 496 128C522.5 128 544 149.5 544 176L544 192L560 192C586.5 192 608 213.5 608 240L608 288C625.7 288 640 302.3 640 320C640 337.7 625.7 352 608 352L608 400C608 426.5 586.5 448 560 448L544 448L544 464C544 490.5 522.5 512 496 512C469.5 512 448 490.5 448 464L448 352L192 352L192 464C192 490.5 170.5 512 144 512C117.5 512 96 490.5 96 464L96 448L80 448C53.5 448 32 426.5 32 400L32 352C14.3 352 0 337.7 0 320C0 302.3 14.3 288 32 288L32 240C32 213.5 53.5 192 80 192L96 192L96 176z" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Descubra seu <span className="text-blue-600">IMC</span>
              <br />
              em segundos
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Calcule seu Índice de Massa Corporal e receba orientações
              personalizadas para alcançar seus objetivos de saúde
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={handleCalculateClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
              >
                Calcular Agora
              </button>
              <button
                onClick={scrollToInfo}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg transition"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Por que usar nossa calculadora?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section
        id="info"
        className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                O que é o IMC?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                O Índice de Massa Corporal (IMC) é uma medida internacional
                usada para calcular se uma pessoa está no peso ideal. Ele é
                calculado dividindo o peso pela altura ao quadrado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Embora o IMC não seja uma medida perfeita, é uma ferramenta útil
                para avaliar se seu peso está dentro de uma faixa saudável e
                identificar possíveis riscos à saúde.
              </p>
              <button
                onClick={handleCalculateClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Calcular meu IMC
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tabela de Classificação
              </h3>
              <div className="space-y-3">
                {imcRanges.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {item.category}
                      </div>
                      <div className="text-sm text-gray-600">
                        IMC {item.range}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
