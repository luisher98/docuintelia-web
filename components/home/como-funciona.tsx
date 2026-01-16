import { ClipboardList, Sparkles, FileCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Introduce los datos",
    description:
      "Registra la información de tu proyecto en formularios adaptados a tu metodología de trabajo.",
  },
  {
    icon: Sparkles,
    step: "2",
    title: "La IA genera el contenido",
    description:
      "El sistema analiza los datos y redacta el informe siguiendo tu estilo y estructura preferida.",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Revisa, edita y entrega",
    description:
      "Ajusta el contenido generado, aprueba cada sección y exporta el documento final.",
  },
];

export function ComoFunciona() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso simple que transforma la manera en que generas informes
            técnicos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border" />

            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="h-14 w-14 rounded-xl bg-card border flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
