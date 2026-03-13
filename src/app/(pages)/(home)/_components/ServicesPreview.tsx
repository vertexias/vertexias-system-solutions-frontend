import Link from "next/link";
import {
  LayoutTemplate,
  Globe,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored digital products and operational systems built to match business goals and workflows.",
    icon: LayoutTemplate,
  },
  {
    title: "Web Applications",
    desc: "Fast, scalable, and user-focused web platforms for startups, enterprises, and service businesses.",
    icon: Globe,
  },
  {
    title: "Mobile Applications",
    desc: "Modern mobile experiences built for usability, performance, and reliable API-driven workflows.",
    icon: Smartphone,
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-y border-slate-200/50 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Product engineering services designed for growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We help companies turn ideas into dependable digital products with strong
              architecture, modern UI, and business-ready implementation.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            More Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title} className="h-full">
                <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white">
                    <Icon className="h-5 w-5 text-cyan-500" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-slate-600">{service.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}