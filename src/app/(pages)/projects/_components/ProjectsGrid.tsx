"use client";

import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "EduWave – SaaS Learning Management Platform",
      description:
        "An SaaS LMS platform where students can purchase courses, teachers manage content, and admins control the ecosystem. Teachers and students can communicate via chat within the platform.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
      status: "Ongoing",
      image: "/projects/eduwave.png",
    },
    {
      title: "EsportsHub - E-sports Tournament Management System",
      description:
        "A SaaS platform designed to organize and manage online and offline eSports tournaments including player registration, team management, match scheduling, bracket automation, and real-time result tracking.",
      tags: ["React", ".NET Core", "PostgreSQL", "EF Core"],
      status: "Ongoing",
      image: "/projects/esports.png",
    },
    {
      title: "Velora - E-commerce System Web Application",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, order processing, payment integration, and admin dashboard for inventory and user management.",
      tags: ["PHP", "Apache", "Bootstrap 5", "JavaScript"],
      status: "Ongoing",
      image: "/projects/ecommerce.png",
    },
    {
      title: "Surgeon - Pharmacy Management Desktop Application",
      description:
        "A desktop-based pharmacy management system including inventory management, billing, sales tracking, purchase orders, user roles, and reporting tools.",
      tags: ["C#", ".NET Framework", "SQL Server", "WinForms"],
      status: "Completed",
      image: "/projects/pharmacy.png",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
