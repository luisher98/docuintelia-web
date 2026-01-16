import { TrendingUp, Quote } from "lucide-react";

export function Resultado() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-8">
            <TrendingUp className="h-5 w-5" />
            <span className="font-medium">Resultados demostrados</span>
          </div>

          <div className="relative mb-8">
            <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary-foreground/20 hidden md:block" />
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              Colaboramos con un cliente piloto en el sector geotécnico que
              utiliza la plataforma en producción, logrando una adaptación
              completa a sus procesos y plantillas existentes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold mb-2">60%</p>
              <p className="text-primary-foreground/80">
                de reducción en tiempo de generación de informes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
