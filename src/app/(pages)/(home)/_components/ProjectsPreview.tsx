import Link from "next/link";
import ProjectCard from "../../projects/_components/ProjectCard";
import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Bonsai - Plants E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for buying and selling bonsai plants with product management, smart search, shopping cart, order tracking, and a complete admin dashboard for inventory and order control.",
    tags: ["Vite", "NestJS", "E-Commerce", "Admin Dashboard"],
    status: "Completed",
    image: "/projects/bonsai.png",
  },
  {
    title: "LaunchDeck - Full SaaS Portfolio & E-Commerce Platform",
    description:
      "A full SaaS platform that allows users to create professional portfolios and fully functional e-commerce stores with analytics, theme customization, AI-powered design tools, and scalable multi-tenant architecture.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "SaaS", "Stripe"],
    status: "Completed",
    image: "/projects/launchdeck.png",
  },
  {
    title: "Travel Box - Travel Agency Management System",
    description:
      "A desktop-based travel management platform that allows agencies to upload tour packages while customers browse, filter, consult, and book trips with full admin control.",
    tags: ["C#", "WinForms", "SQL Server", "Desktop Application"],
    status: "Completed",
    image: "/projects/travel-box.png",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Featured Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              A quick look at some of the products we have built
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From SaaS platforms and e-commerce systems to AI-powered tools and desktop
              applications, we build across a wide range of business needs.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] transition hover:scale-[1.02]"
          >
            More Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}