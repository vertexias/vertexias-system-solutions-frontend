"use client";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 p-12 md:p-16 text-center relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
              Ready to build the future?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how Vertexias can help transform your ideas into robust,
              scalable software solutions.
            </p>
            <button
              data-page="contact"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}