import { LayoutTemplate, Database, Cpu } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";

const services = [
  {
    title: "SaaS Development",
    desc: "End-to-end architecture and development of scalable cloud software.",
    icon: LayoutTemplate,
  },
  {
    title: "Enterprise Systems",
    desc: "Custom ERP, CRM, and internal tools for complex workflows.",
    icon: Database,
  },
  {
    title: "AI Integration",
    desc: "Machine learning models and automated workflows.",
    icon: Cpu,
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-y border-slate-200/50 bg-white py-24">
      <StaggerContainer className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <StaggerItem key={index}>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border bg-white">
                  <Icon className="text-cyan-500" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}