"use client";

import ServiceCard from "./ServiceCard";
import { Code2, Box, Globe, Smartphone, CloudCog, BrainCircuit } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Code2,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      title: "Custom Software Development",
      description:
        "Tailor-made solutions engineered from scratch to address your specific business challenges and workflow requirements.",
      features: ["Architecture Design", "Full-Stack Implementation", "Legacy Modernization"],
    },
    {
      icon: Box,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      title: "SaaS Product Development",
      description:
        "Building multi-tenant, secure, and highly scalable Software-as-a-Service platforms ready for market launch.",
      features: ["MVP Development", "Subscription Management", "Multi-tenant Architecture"],
    },
    {
      icon: Globe,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      title: "Web Applications",
      description:
        "Responsive, fast, and accessible web apps delivering native-like experiences in the browser.",
      features: ["Single Page Apps (SPA)", "Progressive Web Apps (PWA)", "E-commerce Platforms"],
    },
    {
      icon: Smartphone,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile experiences designed for performance and user engagement.",
      features: ["iOS & Android", "React Native / Flutter", "API Integration"],
    },
    {
      icon: CloudCog,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      title: "Cloud Infrastructure",
      description:
        "Designing and managing resilient, secure cloud environments optimized for cost and performance.",
      features: ["AWS / Azure / GCP", "Serverless Architecture", "DevOps & CI/CD"],
    },
    {
      icon: BrainCircuit,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      title: "AI & Automation",
      description:
        "Integrating intelligent algorithms and automation to unlock data insights and streamline tasks.",
      features: ["LLM Integration", "Predictive Analytics", "Process Automation"],
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}