import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectorCard } from "@/components/sectores/sector-card";
import {
  Mountain,
  FlaskConical,
  ClipboardCheck,
  Ruler,
  Trees,
  Building2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Docuintelia para consultorías técnicas, laboratorios, certificadoras, ingenierías y más. Descubre cómo podemos ayudar a tu sector.",
};

const sectors = [
  {
    icon: Mountain,
    name: "Consultoría Geotécnica",
    description:
      "Automatiza la generación de estudios geotécnicos, informes de sondeos y columnas litológicas. Define campos para ensayos SPT, muestras y parámetros geotécnicos.",
    documents: [
      "Estudios geotécnicos",
      "Informes de sondeos",
      "Columnas litológicas",
      "Ensayos de laboratorio",
    ],
  },
  {
    icon: FlaskConical,
    name: "Laboratorios de Ensayos",
    description:
      "Configura tipos de muestras, parámetros de ensayo y límites de detección. Genera informes de análisis y certificados con todos los resultados organizados.",
    documents: [
      "Informes de análisis",
      "Certificados de ensayo",
      "Resultados de muestras",
      "Actas de conformidad",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "Empresas Certificadoras",
    description:
      "Define checklists de inspección, criterios de evaluación y escalas de conformidad. Genera informes de inspección estandarizados y certificaciones.",
    documents: [
      "Informes de inspección",
      "Checklists de cumplimiento",
      "Certificaciones",
      "Actas de auditoría",
    ],
  },
  {
    icon: Ruler,
    name: "Estudios de Ingeniería",
    description:
      "Gestiona memorias técnicas, cálculos estructurales y documentación de proyectos. Organiza entregas y revisiones de diseño.",
    documents: [
      "Memorias técnicas",
      "Cálculos estructurales",
      "Proyectos de ejecución",
      "Pliegos de condiciones",
    ],
  },
  {
    icon: Trees,
    name: "Consultoría Medioambiental",
    description:
      "Automatiza estudios de impacto ambiental, informes de monitorización y planes de gestión. Define parámetros ambientales y normativa aplicable.",
    documents: [
      "Estudios de impacto",
      "Informes de monitorización",
      "Planes de gestión",
      "Evaluaciones ambientales",
    ],
  },
  {
    icon: Building2,
    name: "Arquitectura",
    description:
      "Gestiona fases de proyecto, entregas y revisiones de diseño. Genera memorias descriptivas, especificaciones técnicas e informes de obra.",
    documents: [
      "Memorias descriptivas",
      "Especificaciones técnicas",
      "Informes de obra",
      "Certificaciones de proyecto",
    ],
  },
];

export default function SectoresPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sectores</h1>
          <p className="text-lg text-muted-foreground">
            Docuintelia se adapta a las necesidades específicas de cada sector.
            Descubre cómo podemos ayudar a tu empresa a automatizar la
            generación de informes técnicos.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <SectorCard key={index} {...sector} />
          ))}
        </div>

        {/* Other sectors CTA */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-6">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tu sector no está en la lista?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Docuintelia es una plataforma flexible que se adapta a cualquier
              empresa que genere informes técnicos repetitivos. Cuéntanos sobre
              tu sector y diseñaremos una solución a medida.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
