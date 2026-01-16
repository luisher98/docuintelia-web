import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Por favor, introduce un email válido"),
  empresa: z
    .string()
    .max(100, "El nombre de empresa no puede exceder 100 caracteres")
    .optional()
    .or(z.literal("")),
  telefono: z
    .string()
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .optional()
    .or(z.literal("")),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder 2000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
