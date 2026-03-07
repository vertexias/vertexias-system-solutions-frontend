import { Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";

export default function CoreValuesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center tracking-tight text-slate-900 mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition text-center">
            <Lightbulb className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-slate-600 text-sm">
              We continuously explore emerging technologies to build smarter digital solutions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition text-center">
            <ShieldCheck className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Quality</h3>
            <p className="text-slate-600 text-sm">
              Every product we deliver follows strong engineering standards and testing practices.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition text-center">
            <Users className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
            <p className="text-slate-600 text-sm">
              We work as partners with our clients to ensure successful long-term outcomes.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition text-center">
            <Zap className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Agility</h3>
            <p className="text-slate-600 text-sm">
              Our teams adapt quickly to new challenges and rapidly evolving technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}