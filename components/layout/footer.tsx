import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Funcionalidades", href: "/funcionalidades" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/legal" },
    { name: "Política de Privacidad", href: "/privacidad" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.png"
                alt="Docuintelia"
                width={876}
                height={285}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Plataforma de automatización de informes técnicos con inteligencia
              artificial. Reduce el tiempo de redacción y adapta la generación
              de documentos a tu empresa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <a
                  href="mailto:info@docuintelia.com"
                  className="hover:text-primary transition-colors"
                >
                  info@docuintelia.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Docuintelia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
