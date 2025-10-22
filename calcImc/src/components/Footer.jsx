const Footer = () => {
  return (
    <footer class="tracking-wide bg-gradient-to-br from-black via-black to-blue-700 px-8 sm:px-12 pt-16 pb-8">
      <div class="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">

        <div class="min-[1200px]:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 class="text-white font-medium text-base">Services</h4>
          </div>

          <div>
            <h4 class="text-white font-medium text-base">Platforms</h4>
          </div>

          <div>
            <h4 class="text-white font-medium text-base">Company</h4>
          </div>
        </div>
      </div>

      <hr class="mt-10 mb-8 border-gray-600" />

      <div class="flex flex-wrap max-md:flex-col gap-4">
        <p class="text-slate-400 text-sm md:ml-auto">© SoroFitness - Brasil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
