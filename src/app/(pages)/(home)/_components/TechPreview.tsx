"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiGooglecloud,
  SiFlutter,
  SiFastapi,
} from "react-icons/si";

const techs = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Flutter", icon: SiFlutter },
  { name: "Backend APIs", icon: SiFastapi },
];

// duplicate items for seamless infinite scroll
const marqueeTechs = [...techs, ...techs];

export default function TechPreview() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Technologies
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built with modern and dependable technology
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We use reliable, scalable, and industry-proven technologies to ensure
              maintainability, performance, and long-term product success.
            </p>
          </div>

          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            More Technologies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative overflow-hidden">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee group flex w-max items-center gap-5">
            {marqueeTechs.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 transition hover:border-cyan-200 hover:bg-cyan-50/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <span className="whitespace-nowrap text-base font-semibold text-slate-800">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll-right 28s linear infinite;
        }

        .group:hover.marquee,
        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}