export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-cyan-50 to-white border-b border-slate-200/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-300/20 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
          Building the Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Intelligent Software
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Vertexias System Solutions is a technology-driven company focused on engineering modern
          software products, enterprise systems, and scalable digital platforms for businesses worldwide.
        </p>
      </div>
    </section>
  );
}