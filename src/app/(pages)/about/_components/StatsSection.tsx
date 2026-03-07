export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-semibold text-slate-900">5+</h3>
            <p className="text-slate-500 mt-2">Tech Stacks</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-slate-900">24/7</h3>
            <p className="text-slate-500 mt-2">Supports</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-slate-900">5+</h3>
            <p className="text-slate-500 mt-2">Experienced Developer</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-slate-900">100%</h3>
            <p className="text-slate-500 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}