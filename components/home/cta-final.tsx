import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTAFinal() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres saber cómo Docuintelia puede ayudar a tu empresa?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuéntanos sobre tu empresa y te explicamos cómo podemos adaptar la
            plataforma a tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4" />
                Contactar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Normalmente respondemos en 24-48 horas
          </p>
        </div>
      </div>
    </section>
  );
}
