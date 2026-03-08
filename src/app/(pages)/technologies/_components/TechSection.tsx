interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function TechSection({ title, icon, children }: Props) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
        {icon}
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}