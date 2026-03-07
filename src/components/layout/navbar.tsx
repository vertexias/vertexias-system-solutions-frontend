"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-50 h-10 flex items-center justify-center">
            <img src="/logo/vertexias.png" alt="vertexias" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/home"
            className="text-slate-900 font-medium hover:text-cyan-600 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/technologies"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
          >
            Technologies
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:scale-[1.02] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-slate-600">
          <Menu />
        </button>
      </div>
    </nav>
  );
}