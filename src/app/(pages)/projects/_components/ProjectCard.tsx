"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  image,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Project Image */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 mb-6">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-md text-xs font-medium border ${
              status === "Completed"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-orange-50 text-orange-700 border-orange-200"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}