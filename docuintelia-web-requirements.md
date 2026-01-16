# Docuintelia - Requerimientos Web de Producto

## Resumen del Proyecto

Sitio web de producto (brochure site) para Docuintelia, una plataforma de automatización de informes técnicos con IA. El objetivo es informar a potenciales clientes sobre el producto y captar leads mediante formulario de contacto.

---

## Decisiones Tomadas

| Aspecto | Decisión |
|---------|----------|
| Tipo de web | Brochure site (informativo) |
| Público | Decisores de negocio + Usuarios técnicos |
| Estructura | Multi-página |
| Conversión | Formulario de contacto simple → Email directo |
| Idioma | Español (único) |
| Framework | Next.js |
| Hosting | Vercel |
| Dominio | Ya disponible |
| Estilo | Corporativo, temática documentos |
| Identidad visual | Básica inicial (sin colores definidos) |

---

## Estructura de Páginas

```
/                    → Home (landing principal)
/funcionalidades     → Detalle de funcionalidades
/sectores            → Casos de uso por sector
/contacto            → Formulario de contacto
```

---

## Página: Home (`/`)

### Objetivo
Primera impresión. Comunicar propuesta de valor y dirigir a explorar más o contactar.

### Secciones

#### 1. Hero
- Titular principal: propuesta de valor clara
- Subtítulo: descripción breve del problema que resuelve
- CTA primario: "Solicitar información" → `/contacto`
- CTA secundario: "Ver funcionalidades" → `/funcionalidades`
- Visual: ilustración o mockup abstracto relacionado con documentos/informes

**Contenido sugerido:**
```
Titular: "Automatiza tus informes técnicos con IA"
Subtítulo: "Reduce un 60% el tiempo de redacción. La plataforma que se adapta
a tus formularios, plantillas y estilo de trabajo."
```

#### 2. Problema / Dolor
- Breve descripción del problema que enfrentan las consultoras técnicas
- Datos: "20-40 horas por informe", "30% del tiempo facturable"
- Tono empático

#### 3. Solución (resumen)
- 3-4 puntos clave de lo que ofrece Docuintelia
- Iconos + texto breve
- Ejemplos:
  - "IA que aprende tu estilo"
  - "Adaptación total a tu empresa"
  - "Integración con Microsoft 365"
  - "Gestión comercial incluida"

#### 4. Cómo funciona (simplificado)
- 3 pasos visuales:
  1. "Introduce los datos de tu proyecto"
  2. "La IA genera el contenido"
  3. "Revisa, edita y entrega"

#### 5. Sectores / A quién va dirigido
- Lista visual de sectores objetivo
- Enlace a `/sectores` para más detalle

#### 6. Resultado destacado
- Quote o dato del cliente piloto
- "60% de reducción en tiempo de generación de informes"
- Sin nombrar cliente específico

#### 7. CTA Final
- Repetir llamada a la acción
- "¿Quieres saber cómo Docuintelia puede ayudar a tu empresa?"
- Botón a `/contacto`

#### 8. Footer
- Logo
- Enlaces a páginas
- Email de contacto
- Aviso legal / Política de privacidad (enlaces, páginas simples)

---

## Página: Funcionalidades (`/funcionalidades`)

### Objetivo
Detalle completo de lo que ofrece la plataforma. Para usuarios técnicos que quieren profundizar.

### Estructura

Listado de funcionalidades agrupadas por categorías. Cada funcionalidad:
- Título
- Descripción (1-2 párrafos)
- Lista de características clave
- Icono o ilustración

### Categorías y Funcionalidades

#### Personalización
- Sistema de plugins personalizados
- Formularios a medida
- Validaciones de negocio

#### Gestión de Proyectos
- Tablero Kanban visual
- Ciclo de vida configurable
- Sistema de archivo

#### Entrada de Datos
- Interfaces tipo hoja de cálculo
- Datos jerárquicos
- Validación inteligente

#### Generación con IA
- Secciones configurables
- Generación inteligente
- Aprendizaje del estilo de la empresa
- Control total del profesional

#### Integración Cloud
- Microsoft 365 / OneDrive
- Edición en Word Online
- Control de versiones
- Integraciones con sistemas externos (ERPs, CRMs, APIs)

#### Gestión Adicional
- Clientes
- Personal y recursos
- Presupuestos y facturas

#### Colaboración
- Tiempo real
- Interfaz moderna (responsive, modo oscuro)

### CTA
- Al final: "¿Tienes preguntas?" → `/contacto`

---

## Página: Sectores (`/sectores`)

### Objetivo
Mostrar aplicabilidad a diferentes industrias. Ayuda a que el visitante se identifique.

### Estructura

Grid o lista de sectores con:
- Nombre del sector
- Icono representativo
- Descripción breve de cómo Docuintelia ayuda en ese sector
- Ejemplos de tipos de informes o documentos

### Sectores a Incluir

1. **Consultoría Geotécnica**
   - Estudios geotécnicos, informes de sondeos, columnas litológicas

2. **Laboratorios de Ensayos**
   - Informes de análisis, certificados de ensayo, resultados de muestras

3. **Empresas Certificadoras**
   - Informes de inspección, checklists de cumplimiento, certificaciones

4. **Estudios de Ingeniería**
   - Memorias técnicas, cálculos estructurales, proyectos

5. **Consultorías Medioambientales**
   - Estudios de impacto, informes de monitorización, planes de gestión

6. **Arquitectura**
   - Memorias descriptivas, especificaciones técnicas, informes de obra

### CTA
- "¿Tu sector no está en la lista? Contáctanos" → `/contacto`

---

## Página: Contacto (`/contacto`)

### Objetivo
Captar leads cualificados mediante formulario simple.

### Contenido

#### Encabezado
- Titular: "Hablemos"
- Subtítulo: "Cuéntanos sobre tu empresa y cómo podemos ayudarte"

#### Formulario

**Campos:**
| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre | text | Sí |
| Email | email | Sí |
| Empresa | text | No |
| Teléfono | tel | No |
| Mensaje | textarea | Sí |

**Botón:** "Enviar mensaje"

**Comportamiento:**
- Envío por email directo (usar Resend, Nodemailer o similar)
- Email destino: configurable via variable de entorno
- Mensaje de confirmación tras envío exitoso
- Validación de campos en cliente y servidor

#### Información Adicional
- Email de contacto directo (alternativa al formulario)
- Texto: "Normalmente respondemos en 24-48 horas"

---

## Páginas Legales

### Aviso Legal (`/legal`)
- Datos de la empresa
- Condiciones de uso del sitio

### Política de Privacidad (`/privacidad`)
- Tratamiento de datos del formulario
- Cookies (si se usan)
- Derechos RGPD

---

## Requisitos Técnicos

### Stack

```
Framework:       Next.js 14+ (App Router)
Lenguaje:        TypeScript
Estilos:         Tailwind CSS
Componentes:     shadcn/ui (consistencia con producto principal)
Formularios:     React Hook Form + Zod
Email:           Resend (o Nodemailer)
Hosting:         Vercel
Analytics:       Vercel Analytics (o Google Analytics)
```

### Estructura de Proyecto

```
docuintelia-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Home
│   ├── funcionalidades/
│   │   └── page.tsx
│   ├── sectores/
│   │   └── page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   ├── legal/
│   │   └── page.tsx
│   ├── privacidad/
│   │   └── page.tsx
│   └── api/
│       └── contacto/
│           └── route.ts         # Endpoint envío email
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── problema.tsx
│   │   ├── solucion.tsx
│   │   ├── como-funciona.tsx
│   │   ├── sectores-preview.tsx
│   │   ├── resultado.tsx
│   │   └── cta-final.tsx
│   ├── funcionalidades/
│   │   └── feature-card.tsx
│   ├── sectores/
│   │   └── sector-card.tsx
│   ├── contacto/
│   │   └── contact-form.tsx
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── email.ts                 # Lógica envío email
│   └── validations.ts           # Schemas Zod
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
└── .env.local
```

### Variables de Entorno

```env
# Email
RESEND_API_KEY=
CONTACT_EMAIL_TO=

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=
```

---

## Estilo Visual

### Principios

- **Corporativo**: Profesional, serio, confiable
- **Documentos**: Temática relacionada con papeles, informes, estructura
- **Limpio**: Espacios en blanco, jerarquía clara
- **Accesible**: Contraste adecuado, tamaños legibles

### Paleta de Colores (inicial/básica)

```css
/* Colores base - neutros profesionales */
--background: #ffffff;
--foreground: #0f172a;          /* slate-900 */

--muted: #f1f5f9;               /* slate-100 */
--muted-foreground: #64748b;    /* slate-500 */

--border: #e2e8f0;              /* slate-200 */

/* Color primario - azul corporativo */
--primary: #1e40af;             /* blue-800 */
--primary-foreground: #ffffff;

/* Color secundario - acento */
--accent: #3b82f6;              /* blue-500 */

/* Estados */
--success: #16a34a;             /* green-600 */
--error: #dc2626;               /* red-600 */
```

### Tipografía

```css
/* Sistema de fuentes - usar Inter o similar sans-serif */
--font-sans: 'Inter', system-ui, sans-serif;

/* Tamaños */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

### Componentes Visuales

**Botones:**
- Primario: fondo azul, texto blanco, bordes redondeados suaves
- Secundario: borde azul, fondo transparente, texto azul

**Cards:**
- Fondo blanco o muted
- Borde sutil
- Sombra suave en hover
- Border-radius medio

**Iconos:**
- Lucide Icons (ya usado en shadcn/ui)
- Tamaño consistente (24px base)
- Color muted o primary según contexto

---

## SEO y Rendimiento

### Meta Tags por Página

**Home:**
```html
<title>Docuintelia - Automatiza tus informes técnicos con IA</title>
<meta name="description" content="Plataforma de automatización de informes técnicos con inteligencia artificial. Reduce un 60% el tiempo de redacción. Adaptación total a tu empresa.">
```

**Funcionalidades:**
```html
<title>Funcionalidades - Docuintelia</title>
<meta name="description" content="Descubre todas las funcionalidades de Docuintelia: generación con IA, gestión de proyectos, integración con Microsoft 365, y más.">
```

**Sectores:**
```html
<title>Sectores - Docuintelia</title>
<meta name="description" content="Docuintelia para consultorías técnicas, laboratorios, certificadoras, ingenierías y más. Descubre cómo podemos ayudar a tu sector.">
```

**Contacto:**
```html
<title>Contacto - Docuintelia</title>
<meta name="description" content="Contacta con nosotros para saber más sobre Docuintelia. Te respondemos en 24-48 horas.">
```

### Open Graph

- Imagen OG genérica para compartir en redes
- Título y descripción por página

### Rendimiento

- Imágenes optimizadas con next/image
- Fonts optimizados con next/font
- Lazy loading de secciones below the fold
- Puntuación objetivo Lighthouse: >90 en todas las métricas

---

## Contenido Pendiente de Crear

| Elemento | Estado | Notas |
|----------|--------|-------|
| Textos definitivos de cada sección | Pendiente | Usar docuintelia-descripcion.md como base |
| Logo | Pendiente | Necesario para header/footer |
| Ilustraciones/mockups | Pendiente | Pueden ser abstractas inicialmente |
| Iconos por funcionalidad | Pendiente | Lucide Icons disponibles |
| Datos legales empresa | Pendiente | Para aviso legal |
| Email de contacto | Pendiente | Para formulario y footer |

---

## Fases de Implementación

### Fase 1: Estructura base
- Setup proyecto Next.js
- Configurar Tailwind + shadcn/ui
- Layout (header, footer)
- Páginas vacías con rutas

### Fase 2: Home
- Todas las secciones del home
- Estilos básicos
- Responsive

### Fase 3: Páginas secundarias
- Funcionalidades
- Sectores
- Contacto (sin funcionalidad de envío)

### Fase 4: Formulario funcional
- Integrar envío de email
- Validación
- Estados (loading, success, error)

### Fase 5: Páginas legales + SEO
- Aviso legal
- Privacidad
- Meta tags
- Sitemap

### Fase 6: Pulido
- Animaciones sutiles
- Optimización de rendimiento
- Testing en diferentes dispositivos

---

## Notas Adicionales

- El proyecto será un repositorio separado del producto principal
- Mantener consistencia visual con el producto donde tenga sentido (tipografía, componentes)
- Preparado para añadir más idiomas en el futuro (estructura i18n-friendly)
- Preparado para añadir blog/recursos en el futuro (estructura extensible)
