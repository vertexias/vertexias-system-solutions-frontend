"use client";

import { LucideIcon } from "lucide-react";

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  color?: string;
}

export default function TechCard({
  icon: Icon,
  name,
  color = "text-cyan-500",
}: TechCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
      <Icon className={`w-12 h-12 mb-4 ${color}`} />
      <span className="font-medium text-slate-900">{name}</span>
    </div>
  );
}