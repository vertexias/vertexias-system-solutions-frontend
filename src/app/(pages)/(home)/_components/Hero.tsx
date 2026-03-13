import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import HeroMotion from "./HeroMotion";


export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-32">
      <HeroMotion>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiPjAgMSAwPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSI0MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCI+MSAwIDE8L3RleHQ+PC90ZXh0Pjwvc3ZnPg==")',
          }}
        />

        <div
          data-hero-glow
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/30 blur-[140px] pointer-events-none"
        />

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div
            data-hero-badge
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            Business-Focused Software Engineering
          </div>

          <h1
            data-hero-title
            className="mx-auto mb-8 max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-slate-900 md:text-7xl"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              intelligent
            </span>{" "}
            software solutions that help businesses scale
          </h1>

          <p
            data-hero-text
            className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            Vertexias builds web applications, mobile apps, SaaS platforms, enterprise
            systems, desktop software, and AI-enabled products with a strong focus on
            usability, scalability, and long-term product value.
          </p>

          <div
            data-hero-actions
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-medium text-white shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] transition hover:scale-[1.02]"
            >
              Explore Our Work
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-200 bg-white px-8 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}