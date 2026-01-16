import { Clock, TrendingDown, FileWarning } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "20-40 horas",
    description: "por informe en tareas manuales repetitivas",
  },
  {
    icon: TrendingDown,
    stat: "30%",
    description: "del tiempo facturable perdido en trabajo administrativo",
  },
  {
    icon: FileWarning,
    stat: "Inconsistencia",
    description: "en redacción y formatos entre proyectos",
  },
];

export function Problema() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            El problema que resolvemos
          </h2>
          <p className="text-lg text-muted-foreground">
            Las empresas de consultoría técnica dedican demasiado tiempo a
            tareas repetitivas de redacción. Profesionales cualificados pierden
            horas en trabajo administrativo en lugar de análisis técnico de
            valor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-destructive/10 mb-4">
                <problem.icon className="h-7 w-7 text-destructive" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">
                {problem.stat}
              </p>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
