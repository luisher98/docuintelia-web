import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Docuintelia - Automatiza tus informes técnicos con IA",
    template: "%s | Docuintelia",
  },
  description:
    "Plataforma de automatización de informes técnicos con inteligencia artificial. Reduce un 60% el tiempo de redacción. Adaptación total a tu empresa.",
  keywords: [
    "informes técnicos",
    "automatización",
    "inteligencia artificial",
    "IA",
    "consultoría técnica",
    "generación de documentos",
    "Microsoft 365",
  ],
  authors: [{ name: "Docuintelia" }],
  creator: "Docuintelia",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://docuintelia.com",
    siteName: "Docuintelia",
    title: "Docuintelia - Automatiza tus informes técnicos con IA",
    description:
      "Plataforma de automatización de informes técnicos con inteligencia artificial. Reduce un 60% el tiempo de redacción.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docuintelia - Automatiza tus informes técnicos con IA",
    description:
      "Plataforma de automatización de informes técnicos con inteligencia artificial. Reduce un 60% el tiempo de redacción.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
