import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">

      {/* Binary Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiPjAgMSAwPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSI0MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCI+MSAwIDE8L3RleHQ+PC90ZXh0Pjwvc3ZnPg==\")",
        }}
      />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/30 blur-[140px] rounded-full pointer-events-none" />

      {/* Gradient Overlay for Blend */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          Next-Generation Enterprise Software
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight mb-8">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Intelligent
          </span>{" "}
          Software Solutions for the Future
        </h1>

        {/* Description */}
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          Vertexias partners with industry leaders to build scalable,
          high-performance web and mobile applications, SaaS platforms,
          and enterprise AI systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:scale-[1.02] transition"
          >
            Explore Our Work
          </Link>

          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition"
          >
            View Services
          </Link>

        </div>
      </div>
    </section>
  );
}