"use client";

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon: Icon,
  iconBg = "bg-cyan-50",
  iconColor = "text-cyan-600",
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div
        className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors`}
      >
        <Icon className={`w-7 h-7 ${iconColor} group-hover:text-white transition-colors`} />
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 text-base mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-slate-500 font-medium">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <i className="w-4 h-4 text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.485 1.929l-7.071 7.071-3.536-3.536-1.414 1.414 4.95 4.95 8.485-8.485z" />
              </svg>
            </i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}