"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { useRecaptcha } from "@/lib/use-recaptcha";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { executeRecaptcha } = useRecaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha("contact_form");

      if (!recaptchaToken) {
        setStatus("error");
        setErrorMessage(
          "Error de verificación. Por favor, inténtalo de nuevo."
        );
        return;
      }

      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Error al enviar el formulario");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-green-700 mb-6">
          Gracias por contactar con nosotros. Te responderemos en 24-48 horas.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="border-green-300 text-green-700 hover:bg-green-100"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre">
            Nombre <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            {...register("nombre")}
            aria-invalid={!!errors.nombre}
            disabled={status === "submitting"}
          />
          {errors.nombre && (
            <p className="text-sm text-red-500">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            {...register("email")}
            aria-invalid={!!errors.email}
            disabled={status === "submitting"}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            placeholder="Nombre de tu empresa"
            {...register("empresa")}
            aria-invalid={!!errors.empresa}
            disabled={status === "submitting"}
          />
          {errors.empresa && (
            <p className="text-sm text-red-500">{errors.empresa.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            {...register("telefono")}
            aria-invalid={!!errors.telefono}
            disabled={status === "submitting"}
          />
          {errors.telefono && (
            <p className="text-sm text-red-500">{errors.telefono.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">
          Mensaje <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte..."
          rows={5}
          {...register("mensaje")}
          aria-invalid={!!errors.mensaje}
          disabled={status === "submitting"}
        />
        {errors.mensaje && (
          <p className="text-sm text-red-500">{errors.mensaje.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Este sitio está protegido por reCAPTCHA y aplican la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Política de Privacidad
        </a>{" "}
        y los{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Términos de Servicio
        </a>{" "}
        de Google.
      </p>
    </form>
  );
}
