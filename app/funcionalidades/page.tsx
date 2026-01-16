import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/funcionalidades/feature-card";
import {
  Puzzle,
  FormInput,
  ShieldCheck,
  Kanban,
  RefreshCw,
  Archive,
  Table,
  Network,
  AlertCircle,
  Sparkles,
  FileText,
  GraduationCap,
  UserCheck,
  Cloud,
  FileEdit,
  History,
  Link2,
  Database,
  Webhook,
  Users,
  Contact,
  Briefcase,
  Receipt,
  Calculator,
  Radio,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Descubre todas las funcionalidades de Docuintelia: generación con IA, gestión de proyectos, integración con Microsoft 365, y más.",
};

const featureCategories = [
  {
    title: "Personalización",
    description:
      "Adapta la plataforma completamente a las necesidades de tu empresa.",
    features: [
      {
        icon: Puzzle,
        title: "Sistema de Plugins",
        description:
          "Cada empresa tiene sus propios formularios, plantillas, nomenclatura y flujos. Docuintelia se adapta a ti mediante plugins personalizados.",
        features: [
          "Formularios a medida con tu terminología",
          "Tipos de datos específicos de tu sector",
          "Nomenclatura propia de tu empresa",
        ],
      },
      {
        icon: FormInput,
        title: "Formularios a Medida",
        description:
          "Define los campos exactos que tu equipo necesita, con la terminología que ya utilizan.",
        features: [
          "Campos personalizables",
          "Tipos de datos variados",
          "Estructura flexible",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Validaciones de Negocio",
        description:
          "Reglas automáticas que aseguran la coherencia de los datos según tu metodología de trabajo.",
        features: [
          "Rangos válidos para valores",
          "Consistencia entre datos",
          "Alertas de errores",
        ],
      },
    ],
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Visualiza y gestiona todos tus proyectos de forma eficiente.",
    features: [
      {
        icon: Kanban,
        title: "Tablero Kanban",
        description:
          "Visualiza todos tus proyectos en un tablero donde cada columna representa un estado. Arrastra y suelta para actualizar.",
        features: [
          "Drag & drop entre columnas",
          "Actualización en tiempo real",
          "Columnas configurables",
        ],
      },
      {
        icon: RefreshCw,
        title: "Ciclo de Vida",
        description:
          "Define las etapas por las que pasa cada proyecto en tu empresa con estados personalizables.",
        features: [
          "Estados con colores distintivos",
          "Transiciones controladas",
          "Historial de cambios",
        ],
      },
      {
        icon: Archive,
        title: "Sistema de Archivo",
        description:
          "Archiva proyectos completados para mantener limpio el tablero de trabajo activo.",
        features: [
          "Acceso rápido al histórico",
          "Búsqueda y filtrado avanzado",
          "Restauración cuando sea necesario",
        ],
      },
    ],
  },
  {
    title: "Entrada de Datos",
    description:
      "Interfaces familiares para introducir datos de forma eficiente.",
    features: [
      {
        icon: Table,
        title: "Interfaces Tipo Hoja de Cálculo",
        description:
          "Introduce datos de forma familiar con tablas editables similares a Excel.",
        features: [
          "Añadir, modificar o eliminar filas",
          "Validación en tiempo real",
          "Importación desde Excel",
        ],
      },
      {
        icon: Network,
        title: "Datos Jerárquicos",
        description:
          "Organiza la información según la estructura natural de tus proyectos.",
        features: [
          "Proyectos con múltiples elementos",
          "Relaciones automáticas",
          "Estructura anidada",
        ],
      },
      {
        icon: AlertCircle,
        title: "Validación Inteligente",
        description:
          "Reglas de negocio que previenen errores antes de guardar.",
        features: [
          "Detección de inconsistencias",
          "Alertas preventivas",
          "Sugerencias de corrección",
        ],
      },
    ],
  },
  {
    title: "Generación con IA",
    description:
      "Inteligencia artificial que aprende tu estilo y genera contenido técnico.",
    features: [
      {
        icon: FileText,
        title: "Secciones Configurables",
        description:
          "Define la estructura de tus informes con las secciones que necesites.",
        features: [
          "Introducción, metodología, conclusiones",
          "Secciones técnicas específicas",
          "Orden personalizable",
        ],
      },
      {
        icon: Sparkles,
        title: "Generación Inteligente",
        description:
          "Un clic para generar cualquier sección usando los datos del proyecto.",
        features: [
          "Análisis automático de datos",
          "Redacción técnica de calidad",
          "Editor para ajustes manuales",
        ],
      },
      {
        icon: GraduationCap,
        title: "Aprendizaje Continuo",
        description:
          "El sistema aprende de tus mejores informes anteriores y mejora continuamente.",
        features: [
          "Sube ejemplos de informes",
          "Aprende tu estilo de redacción",
          "Mejora con el uso",
        ],
      },
      {
        icon: UserCheck,
        title: "Control del Profesional",
        description:
          "Los expertos mantienen siempre el control sobre el contenido generado.",
        features: [
          "Edición libre de cada apartado",
          "Revisión y aprobación",
          "Regeneración con parámetros diferentes",
        ],
      },
    ],
  },
  {
    title: "Integración Cloud",
    description:
      "Conexión nativa con Microsoft 365 y sistemas externos.",
    features: [
      {
        icon: Cloud,
        title: "OneDrive",
        description:
          "Tus documentos viven donde tu equipo ya trabaja, con guardado automático.",
        features: [
          "Organización inteligente en carpetas",
          "Sin descargas necesarias",
          "Acceso desde cualquier lugar",
        ],
      },
      {
        icon: FileEdit,
        title: "Word Online",
        description:
          "Abre documentos generados directamente en Word Online para edición colaborativa.",
        features: [
          "Múltiples usuarios simultáneos",
          "Comentarios integrados",
          "Formato profesional",
        ],
      },
      {
        icon: History,
        title: "Control de Versiones",
        description:
          "Control completo de versiones de cada documento generado.",
        features: [
          "Comparación entre versiones",
          "Restauración de anteriores",
          "Registro de cambios",
        ],
      },
      {
        icon: Database,
        title: "Integraciones Externas",
        description:
          "Conecta con tus bases de datos, ERPs, CRMs u otras herramientas existentes.",
        features: [
          "APIs de terceros",
          "Sincronización de datos",
          "Webhooks para automatización",
        ],
      },
    ],
  },
  {
    title: "Gestión Adicional",
    description:
      "Todo lo que necesitas para gestionar tu negocio en una plataforma.",
    features: [
      {
        icon: Contact,
        title: "Gestión de Clientes",
        description:
          "Base de datos completa con datos fiscales, contacto e historial de proyectos.",
        features: [
          "Validación de CIF/NIF/NIE",
          "Historial por cliente",
          "Búsqueda rápida",
        ],
      },
      {
        icon: Users,
        title: "Personal y Recursos",
        description:
          "Gestiona equipos de trabajo, técnicos y recursos materiales.",
        features: [
          "Asignación a proyectos",
          "Visualización de carga",
          "Historial de participación",
        ],
      },
      {
        icon: Receipt,
        title: "Presupuestos",
        description:
          "Genera presupuestos profesionales con numeración automática y ciclo de vida completo.",
        features: [
          "Conversión a factura",
          "Envío por email",
          "Duplicación para trabajos similares",
        ],
      },
      {
        icon: Calculator,
        title: "Facturas",
        description:
          "Facturación completa integrada con gestión de cobros y estados.",
        features: [
          "Numeración secuencial",
          "Seguimiento de pagos",
          "Cálculo de impuestos",
        ],
      },
    ],
  },
  {
    title: "Colaboración",
    description: "Trabajo en equipo eficiente con información siempre actualizada.",
    features: [
      {
        icon: Radio,
        title: "Tiempo Real",
        description:
          "El equipo siempre trabaja con información actualizada y sincronizada.",
        features: [
          "Cambios visibles inmediatamente",
          "Notificaciones de actualizaciones",
          "Sin necesidad de refrescar",
        ],
      },
      {
        icon: MonitorSmartphone,
        title: "Interfaz Moderna",
        description:
          "Diseño profesional, limpio y responsive que funciona en cualquier dispositivo.",
        features: [
          "Diseño responsive",
          "Navegación intuitiva",
          "Accesibilidad WCAG",
        ],
      },
    ],
  },
];

export default function FuncionalidadesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Funcionalidades
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubre todo lo que Docuintelia puede hacer por tu empresa.
            Una plataforma completa para automatizar la generación de informes
            técnicos y gestionar tu negocio.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard key={featureIndex} {...feature} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tienes preguntas?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contacta con nosotros para resolver tus dudas o solicitar una
              demostración personalizada.
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
