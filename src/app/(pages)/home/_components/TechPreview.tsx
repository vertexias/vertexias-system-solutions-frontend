"use client";

import { Atom, Triangle, Hexagon, Box, Cloud } from "lucide-react";

export default function TechPreview() {
  const techs = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Triangle },
    { name: "NestJS", icon: Hexagon }, // updated from Node.js to NestJS
    { name: "Docker", icon: Box },
    { name: "AWS", icon: Cloud },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Powered by modern technologies
        </p>
      </div>

      <div className="flex gap-12 justify-center items-center opacity-60 flex-wrap px-6">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"
            >
              <Icon className="w-8 h-8" />
              {tech.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}