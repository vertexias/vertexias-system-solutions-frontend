"use client";

import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Bonsai - Bonsai Plants E-Commerce Platform",
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
      title: "EduWave – SaaS Learning Management Platform",
      description:
        "An SaaS LMS platform where students can purchase courses, teachers manage content, and admins control the ecosystem. Teachers and students can communicate via chat within the platform.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
      status: "Ongoing",
      image: "/projects/eduwave.png",
    },
    {
      title: "CalendarAI - Intelligent Calendar Management System",
      description:
        "An AI-powered calendar application that helps users organize, track, and optimize their schedules with smart insights, conversational AI scheduling, productivity analytics, and advanced event management.",
      tags: ["Next.js", "Nest.js", "PostgreSQL", "AI Assistant"],
      status: "Completed",
      image: "/projects/calendar-ai.png",
    },
    {
      title: "ZINX Meta Ariana - Social Gaming & Metaverse Platform",
      description:
        "A full-stack social gaming and metaverse platform featuring clans, leaderboards, marketplace, social feeds, and integrated payments with a powerful admin dashboard and real-time user engagement tools.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "SSLCommerz"],
      status: "Completed",
      image: "/projects/zinx-meta-ariana.png",
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
    {
      title: "Travel Box - Travel Agency Management System",
      description:
        "A desktop-based travel management platform that allows agencies to upload tour packages while customers browse, filter, consult, and book trips. Includes full admin control for managing agencies, customers, and bookings.",
      tags: ["C#", "WinForms", "SQL Server", "Desktop Application"],
      status: "Completed",
      image: "/projects/travel-box.png",
    },
    {
      title: "Shopner Dhaka - Smart City Complaint & Utility System",
      description:
        "A Java desktop application designed for Dhaka city residents to raise public complaints, pay utility bills, and access emergency services with dedicated Admin, Employee, and User role-based management.",
      tags: ["Java", "Desktop Application", "Utility Management", "Complaint System"],
      status: "Completed",
      image: "/projects/shopner-dhaka.png",
    }
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
