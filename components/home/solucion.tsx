import {
  Sparkles,
  Settings2,
  Cloud,
  Receipt,
} from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "IA personalizable a tu medida",
    description:
      "Define instrucciones para que la IA genere informes con tu estilo de redacción, terminología y estructura preferida.",
  },
  {
    icon: Settings2,
    title: "Adaptación total a tu empresa",
    description:
      "Formularios, plantillas y flujos de trabajo personalizados. El sistema habla el idioma de tu organización.",
  },
  {
    icon: Cloud,
    title: "Integración con Microsoft 365",
    description:
      "Tus documentos en OneDrive, edición en Word Online y colaboración en tiempo real con tu equipo.",
  },
  {
    icon: Receipt,
    title: "Gestión comercial incluida",
    description:
      "Presupuestos, facturas y gestión de clientes integrados. Todo lo que necesitas en una sola plataforma.",
  },
];

export function Solucion() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La solución: Docuintelia
          </h2>
          <p className="text-lg text-muted-foreground">
            Una plataforma que automatiza la generación de informes técnicos
            mediante inteligencia artificial personalizada. Lo que antes tomaba
            días, ahora toma horas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
