import { ShieldCheck, Gauge, Workflow, Users } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animation/Stagger";

const points = [
  {
    title: "Scalable Architecture",
    description:
      "We design systems that stay maintainable as your product, users, and business operations grow.",
    icon: Workflow,
  },
  {
    title: "Performance Focused",
    description:
      "From frontend responsiveness to backend efficiency, we build for speed, reliability, and smooth user experience.",
    icon: Gauge,
  },
  {
    title: "Business-Oriented Solutions",
    description:
      "Every feature is planned with practical business value, operational clarity, and user usability in mind.",
    icon: Users,
  },
  {
    title: "Reliable Engineering",
    description:
      "We emphasize clean architecture, secure development practices, and long-term sustainability of the product.",
    icon: ShieldCheck,
  },
];

export default function HomeInfoSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            Why Vertexias
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            We build software that is practical, scalable, and ready for real business use
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our focus is not only on clean interfaces and modern technology, but also on
            building products that solve operational problems, support growth, and create
            measurable value.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title} className="h-full">
                <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 min-h-[56px] text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="flex-1 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}