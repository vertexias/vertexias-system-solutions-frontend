"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  name: string;
  bg?: string;
  color?: string;
}

export default function TechListItem({
  icon: Icon,
  name,
  bg = "bg-slate-100",
  color = "text-slate-700",
}: Props) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
      <div className={`w-10 h-10 rounded flex items-center justify-center ${bg} ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-slate-900">{name}</span>
    </div>
  );
}