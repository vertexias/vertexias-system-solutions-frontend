"use client";

import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo/vertexias-white.png"
                alt="Vertexias Logo"
                width={200}      // desired width
                height={50}      // keep proper aspect ratio
                className="object-contain h-auto"
              />
            </div>
            <p className="text-sm max-w-sm mb-4">
              Engineering intelligent software solutions for the modern enterprise. We
              build scalable, reliable, and secure technology.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@vertexias.com"
                className="hover:text-white transition-colors"
              >
                info@vertexias.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  data-page="about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  data-page="services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  data-page="projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  data-page="tech"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <button
                  data-page="contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Vertexias System Solutions. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-transform hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}