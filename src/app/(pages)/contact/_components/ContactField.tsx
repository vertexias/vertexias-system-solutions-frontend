import React from "react";

type ContactFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  textarea?: boolean;
  rows?: number;
};

export default function ContactField({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  textarea = false,
  rows = 4,
}: ContactFieldProps) {
  const className = `w-full rounded-xl border bg-slate-50 px-4 py-3 text-base outline-none transition-all ${
    error
      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10"
      : "border-slate-200 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
  }`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
      )}

      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  );
}