import { Metadata } from "next";
import { ContactForm } from "@/components/contacto/contact-form";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con nosotros para saber más sobre Docuintelia. Te respondemos en 24-48 horas.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hablemos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos sobre tu empresa y cómo podemos ayudarte a automatizar
              la generación de informes técnicos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email directo</h3>
                    <a
                      href="mailto:info@estudiosdelterreno.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@estudiosdelterreno.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Si prefieres escribirnos directamente, puedes hacerlo a
                  nuestro email de contacto.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Tiempo de respuesta</h3>
                    <p className="text-sm text-muted-foreground">24-48 horas</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Normalmente respondemos en un plazo de 24 a 48 horas
                  laborables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
