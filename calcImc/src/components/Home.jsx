import React from "react";
import { Link } from "react-router-dom";

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
      description: "Algoritmo baseado nas diretrizes da OMS para resultados confiáveis",
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

  const scrollToInfo = () => {
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap');
        .heading-font {
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
        }
      `}</style>

      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block flex flex-col"></div>
            <div className="inline-block">
              <h1 className="leading-[4.0rem] heading-font text-5xl md:text-6xl font-semibold tracking-tight text-black">
                Descubra seu IMC em segundos.
                <br />
                <span className="inline-block mt-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Na melhor do mercado.
                </span>
              </h1>
            </div>
            <div className="flex flex-col pt-2 sm:flex-row gap-4 justify-center items-center mt-4">
              <Link
                to="/calculator"
                className="hover:border-b-[0.1rem] border-[0.1rem] border-b-[0.2rem] border-slate-700 bg-white px-10 py-3 rounded-2xl font-bold shadow-lg w-52 text-center"
              >
                Calculadora
              </Link>
              <button
                onClick={scrollToInfo}
                className="hover:border-b-[0.1rem] border-[0.1rem] border-b-[0.2rem] border-slate-700 bg-white px-10 py-3 rounded-2xl font-bold shadow-lg w-52 text-center"
              >
                Saber mais 
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-font text-4xl font-semibold text-center tracking-wide text-gray-900 mb-16">
            Por que usar nossa calculadora?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="heading-font text-2xl font-medium text-gray-900 mb-3">
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

      <section id="info" className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="mb-16">
                <h2 className="heading-font font-sans text-5xl md:text-4xl font-medium leading-tight tracking-wide text-gray-800">
                  O que <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">realmente</span> é o IMC?
                </h2>
              </div>

              <blockquote className="border-l-4 border-pink-600 pl-6 text-xl font-light text-slate-700 font-sans leading-loose tracking-wide">
                O Índice de Massa Corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Ele é calculado dividindo o peso pela altura ao quadrado.
              </blockquote>

              <blockquote className="border-l-4 border-pink-600 pl-6 text-xl font-light text-slate-700 font-sans leading-loose tracking-wide">
                Embora o IMC não seja uma medida perfeita, é uma ferramenta útil para avaliar se seu peso está dentro de uma faixa saudável e identificar possíveis riscos à saúde.
              </blockquote>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="heading-font text-2xl font-sans font-medium text-gray-900 mb-6 text-center">
                Tabela de Classificação
              </h3>
              <div className="space-y-3">
                {imcRanges.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
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

      <section className="py-10 px-6 bg-white">
        <div className="max-w-md sm:max-w-3xl lg:max-w-6xl mx-auto p-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="leading-[4.0rem] heading-font text-4xl md:text-4xl font-semibold tracking-wide text-slate-900 mt-6">
              O que nossos usuários dizem?
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4 mt-12">
            <div className="border-2 border-blue-100 break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Thiago Gutierres"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Thiago Gutierres
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Personal Trainer
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  A calculadora de IMC é super prática! Comecei a acompanhar meu peso semanalmente e isso me ajudou a ajustar minha alimentação e treinos. Sinto mais disposição no dia a dia!
                </p>
              </div>
            </div>
            <div className="break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Pedro Silveira"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Pedro Silveira
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Coach Intensivo
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg
                  className="w-3.5 fill-[#b5bdc0]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  Uso com meus alunos para acompanhar a evolução corporal. O cálculo é preciso e as dicas sobre alimentação saudável fazem toda a diferença.
                </p>
              </div>
            </div>
            <div className="break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Emily Rodrigues"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Emily Rodrigues
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Blogueira Fitness
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg
                  className="w-3.5 fill-[#b5bdc0]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  Nunca fui muito ligada a números, mas com essa ferramenta ficou fácil entender meu IMC e ver como pequenas mudanças melhoraram meu bem-estar.
                </p>
              </div>
            </div>
            <div className="break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-4.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Sofia Ferrer"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Sofia Ferrer
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Nutricionista
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg
                  className="w-3.5 fill-[#b5bdc0]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  Como profissional da saúde, recomendo! É uma ótima forma de conscientizar as pessoas sobre a importância de manter o peso ideal e cuidar da saúde.
                </p>
              </div>
            </div>
            <div className="break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-5.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Jonathan Moraes"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Jonathan Moraes
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Entusiasta
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  Interface simples e intuitiva! Calculei meu IMC em segundos e consegui acompanhar minha evolução desde o início da academia.
                </p>
              </div>
            </div>  
            <div className="border-2 border-blue-100 break-inside-avoid p-6 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 relative w-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://readymadeui.com/team-6.webp"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  alt="Lívia Aguiar"
                />
                <div>
                  <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                    Lívia Aguiar
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Estudante de Medicina
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 mt-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg
                  className="w-3.5 fill-[#b5bdc0]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
              <div className="mt-6">
                <p className="text-slate-700 font-normal text-[15px] leading-relaxed">
                  Eu sempre explico para meus colegas o quanto o IMC é importante para entender a composição corporal. Essa calculadora é simples, rápida e ajuda a mostrar o impacto de hábitos saudáveis no resultado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;