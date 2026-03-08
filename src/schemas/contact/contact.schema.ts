import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid work email"),

  projectDetails: z
    .string()
    .trim()
    .min(10, "Project details must be at least 10 characters"),

  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the Privacy Policy",
    }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;