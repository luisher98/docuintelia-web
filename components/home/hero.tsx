import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Potenciado por IA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Automatiza tus informes técnicos con{" "}
              <span className="text-primary">IA</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Reduce un <strong className="text-foreground">60%</strong> el
              tiempo de redacción. La plataforma que se adapta a tus
              formularios, plantillas y estilo de trabajo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/funcionalidades">Ver funcionalidades</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract document illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card border shadow-2xl rounded-2xl p-8 -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Document header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="h-3 w-32 bg-foreground/20 rounded" />
                      <div className="h-2 w-24 bg-muted-foreground/20 rounded mt-2" />
                    </div>
                  </div>

                  {/* Document content lines */}
                  <div className="space-y-3 pt-4">
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-5/6 bg-muted rounded" />
                    <div className="h-2 w-4/5 bg-muted rounded" />
                  </div>

                  {/* AI generation indicator */}
                  <div className="flex items-center gap-2 pt-4">
                    <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                    <span className="text-sm text-accent font-medium">
                      Generando contenido...
                    </span>
                  </div>

                  {/* More content lines */}
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-accent/30 rounded animate-pulse" />
                    <div className="h-2 w-4/5 bg-accent/20 rounded animate-pulse delay-100" />
                    <div className="h-2 w-5/6 bg-accent/10 rounded animate-pulse delay-200" />
                  </div>

                  {/* Table representation */}
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-6 bg-muted rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
