const Footer = () => {
  return (
    <footer class="tracking-wide bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 pt-2 pb-2 px-10">
      <div class="max-w-screen-xl mx-auto text-center justify-center items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          <div>
            <h4 class="text-slate-400 font-medium text-base mb-2">Home</h4>
          </div>

          <div>
            <h4 class="text-slate-400 font-medium text-base mb-2">Calculadora</h4>
          </div>

          <div>
            <h4 class="text-slate-400 font-medium text-base mb-2">Entrar</h4>
          </div>

          <div>
            <h4 class="text-slate-400 font-medium text-base mb-2">Registro</h4>
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
