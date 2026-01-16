# Docuintelia - Marketing Website

Marketing/brochure website for Docuintelia, a platform that automates technical report generation using AI.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Resend API key and contact email to .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Project Structure

```
app/
├── page.tsx              # Home
├── funcionalidades/      # Features page
├── sectores/             # Sectors page
├── contacto/             # Contact page
├── legal/                # Legal notice
├── privacidad/           # Privacy policy
├── api/contacto/         # Contact form API
├── sitemap.ts            # Sitemap generation
└── robots.ts             # Robots.txt

components/
├── layout/               # Header, Footer
├── home/                 # Home page sections
├── funcionalidades/      # Feature cards
├── sectores/             # Sector cards
├── contacto/             # Contact form
└── ui/                   # shadcn/ui components

lib/
├── email.ts              # Resend email functions
├── validations.ts        # Zod schemas
└── utils.ts              # Utility functions
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for sending emails |
| `CONTACT_EMAIL_TO` | Email address to receive contact form submissions |

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

Proprietary - All rights reserved.
