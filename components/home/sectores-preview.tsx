import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  FlaskConical,
  ClipboardCheck,
  Ruler,
  Trees,
  Building2,
  ArrowRight,
} from "lucide-react";

const sectors = [
  {
    icon: Mountain,
    name: "Consultoría Geotécnica",
  },
  {
    icon: FlaskConical,
    name: "Laboratorios de Ensayos",
  },
  {
    icon: ClipboardCheck,
    name: "Empresas Certificadoras",
  },
  {
    icon: Ruler,
    name: "Estudios de Ingeniería",
  },
  {
    icon: Trees,
    name: "Consultoría Medioambiental",
  },
  {
    icon: Building2,
    name: "Arquitectura",
  },
];

export function SectoresPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para empresas que generan informes técnicos
          </h2>
          <p className="text-lg text-muted-foreground">
            Docuintelia se adapta a las necesidades específicas de cada sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl border bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <sector.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-center">{sector.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/sectores">
              Ver todos los sectores
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
