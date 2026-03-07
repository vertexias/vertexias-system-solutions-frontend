export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Let's Build Something Exceptional
            </h2>
            <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto">
              Partner with Vertexias to transform your ideas into scalable and intelligent software solutions.
            </p>
            <button
              data-page="contact"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}