import { LayoutTemplate, Database, Cpu } from "lucide-react";

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
    <section className="py-24 bg-white border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white border rounded-xl mb-6">
                <Icon className="text-cyan-500" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.desc}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}