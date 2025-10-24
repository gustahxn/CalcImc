export default function Footer() {
  return (
    <footer className="relative bg-[#f8fdf4] rounded-3xl overflow-hidden px-8 py-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,255,120,0.8)_0%,_transparent_70%)] blur-3xl opacity-70 animate-pulse-slow pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-gray-800">AbacatePay</h2>
        <p className="text-gray-600 mt-2">De dev, para dev</p>
      </div>
    </footer>
  );
}
