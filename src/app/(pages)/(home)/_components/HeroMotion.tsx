"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-badge]",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        "[data-hero-title]",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out" }
      );

      gsap.fromTo(
        "[data-hero-text]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.25, ease: "power3.out" }
      );

      gsap.fromTo(
        "[data-hero-actions]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.35, ease: "power3.out" }
      );

      gsap.to("[data-hero-glow]", {
        y: 30,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}