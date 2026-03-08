import AnimatedStat from "./AnimatedStat";
import Reveal from "@/components/animation/Reveal";

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            <AnimatedStat value={5} suffix="+" label="Tech Stacks" />
            <AnimatedStat value={24} suffix="/7" label="Supports" />
            <AnimatedStat value={5} suffix="+" label="Experienced Developer" />
            <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}