"use client";

import TechCard from "./TechCard";
import TechListItem from "./TechListItem";
import TechSection from "./TechSection";

import {
  Layout,
  Server,
  Atom,
  Triangle,
  Wind,
  Smartphone,
  Coffee,
  TerminalSquare,
  Braces,
  Database,
  Leaf,
  Layers,
  CloudCog,
  Box,
  Cloud,
  GitMerge,
  FileCode,
  Code,
  Globe,
  GitBranch,
} from "lucide-react";

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-24">

        {/* Frontend */}
        <TechSection
          title="Frontend"
          icon={<Layout className="w-8 h-8 text-cyan-500" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <TechCard icon={Globe} name="HTML5" color="text-orange-500" />
            <TechCard icon={FileCode} name="CSS3" color="text-blue-500" />
            <TechCard icon={Code} name="JavaScript" color="text-yellow-500" />
            <TechCard icon={Code} name="TypeScript" color="text-blue-600" />

            <TechCard icon={Atom} name="React" color="text-cyan-400" />
            <TechCard icon={Triangle} name="Next.js" color="text-slate-900" />
            <TechCard icon={Wind} name="Tailwind CSS" color="text-cyan-500" />
            <TechCard icon={Smartphone} name="React Native" color="text-blue-500" />

          </div>
        </TechSection>

        {/* Backend */}
        <TechSection
          title="Backend"
          icon={<Server className="w-8 h-8 text-blue-600" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <TechCard icon={Box} name="NestJS" color="text-red-500" />
            <TechCard icon={Coffee} name="Java / Spring" color="text-red-500" />
            <TechCard icon={TerminalSquare} name="Python" color="text-blue-500" />
            <TechCard icon={Braces} name="GraphQL" color="text-slate-700" />

            <TechCard icon={Server} name=".NET" color="text-purple-600" />
            <TechCard icon={Server} name="PHP" color="text-indigo-500" />
            <TechCard icon={Server} name="Laravel" color="text-red-600" />
            <TechCard icon={Globe} name="REST API" color="text-green-600" />

          </div>
        </TechSection>

        {/* Database + DevOps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Database */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <Database className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Database
              </h2>
            </div>

            <div className="space-y-4">
              <TechListItem icon={Database} name="PostgreSQL" bg="bg-blue-50" color="text-blue-600" />
              <TechListItem icon={Database} name="MySQL" bg="bg-orange-50" color="text-orange-600" />
              <TechListItem icon={Leaf} name="MongoDB" bg="bg-green-50" color="text-green-600" />
              <TechListItem icon={Layers} name="Redis" bg="bg-red-50" color="text-red-600" />
            </div>
          </div>

          {/* DevOps */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <CloudCog className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                DevOps
              </h2>
            </div>

            <div className="space-y-4">
              <TechListItem icon={Box} name="Docker & Kubernetes" bg="bg-blue-50" color="text-blue-500" />
              <TechListItem icon={Cloud} name="AWS / Cloud" bg="bg-orange-50" color="text-orange-500" />
              <TechListItem icon={Cloud} name="Azure" bg="bg-blue-50" color="text-blue-600" />
              {/* <TechListItem icon={Cloud} name="Vercel" bg="bg-slate-100" color="text-slate-700" /> */}
              <TechListItem icon={GitBranch} name="Git" bg="bg-orange-50" color="text-orange-600" />
              {/* <TechListItem icon={GitMerge} name="CI/CD Pipelines" bg="bg-slate-100" color="text-slate-700" /> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}