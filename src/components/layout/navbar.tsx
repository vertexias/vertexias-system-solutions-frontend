"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Technologies", href: "/technologies" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-50 h-10 flex items-center justify-center">
            <img src="/logo/vertexias.png" alt="vertexias" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group font-medium transition-colors ${
                  active
                    ? "text-cyan-600"
                    : "text-slate-500 hover:text-cyan-600"
                }`}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-600 origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:scale-[1.02] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-slate-600">
          <Menu />
        </button>

      </div>
    </nav>
  );
}