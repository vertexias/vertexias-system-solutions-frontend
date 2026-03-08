"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function AnimatedStat({ value, suffix = "", label }: Props) {
  const numberRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = `${Math.round(obj.val)}${suffix}`;
        }
      },
    });
  }, [value, suffix]);

  return (
    <div className="text-center">
      <h3 ref={numberRef} className="text-4xl font-semibold text-slate-900">
        0{suffix}
      </h3>
      <p className="mt-2 text-slate-500">{label}</p>
    </div>
  );
}