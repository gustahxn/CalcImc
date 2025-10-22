const Footer = () => {
  return (
    <footer class="tracking-wide bg-gradient-to-br from-slate-700 via-slate-800 to-black pt-6 pb-6 px-10">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 class="text-gray-800 font-medium text-base mb-6">Home</h4>
          </div>

          <div>
            <h4 class="text-gray-800 font-medium text-base mb-6">Calculadora</h4>
          </div>

          <div>
            <h4 class="text-gray-800 font-medium text-base mb-6">Entrar</h4>
          </div>

          <div>
            <h4 class="text-gray-800 font-medium text-base mb-6">Registro</h4>
          </div>
        </div>

        <div class="border-t text-left border-gray-700 pt-6 mt-8">
          <p class="text-slate-400 text-sm">
            © SoroFitness - Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
