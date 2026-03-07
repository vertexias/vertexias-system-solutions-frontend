import { Layers } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-slate-600">
              <p>
                Vertexias was founded with a simple yet powerful vision — to transform complex
                business challenges into elegant software solutions.
              </p>
              <p>
                Our engineers, designers, and strategists collaborate closely with businesses
                to build scalable, secure, and future-ready digital products.
              </p>
              <p>
                From early-stage startups launching their first MVP to enterprises modernizing
                legacy systems, we help organizations innovate faster through technology.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-[420px] rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-slate-200 flex items-center justify-center">
            <Layers className="w-32 h-32 text-cyan-400 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}