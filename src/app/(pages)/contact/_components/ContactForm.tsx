"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import ContactField from "./ContactField";
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/contact/contact.schema";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  projectDetails: "",
  consent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("Validated form data:", result.data);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ContactField
            label="First Name"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <ContactField
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <ContactField
          label="Work Email"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <ContactField
          label="Project Details"
          name="projectDetails"
          placeholder="Tell us about your requirements..."
          value={formData.projectDetails}
          onChange={handleChange}
          error={errors.projectDetails}
          textarea
          rows={4}
        />

        <label className="flex cursor-pointer items-start gap-3">
          <div className="relative mt-0.5 flex h-5 w-5 items-center justify-center rounded border border-slate-300 bg-white">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
            />
            <div className="pointer-events-none absolute inset-0 rounded peer-checked:border-cyan-600 peer-checked:bg-cyan-600" />
            <Check className="pointer-events-none relative z-20 h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" />
          </div>

          <span className="text-sm text-slate-600">
            I agree to the{" "}
            <a href="#" className="text-cyan-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and consent to being contacted regarding this inquiry.
          </span>
        </label>

        {errors.consent ? (
          <p className="-mt-3 text-sm text-red-500">{errors.consent}</p>
        ) : null}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl  py-4 font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:scale-[1.02] transition"
        >
          Submit Inquiry
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}