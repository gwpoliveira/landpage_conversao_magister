import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto Magister de Ensino | Teresina - PI | Matrículas Abertas",
  description:
    "Do acolhimento na Educação Infantil à alta performance no Ensino Médio e ENEM. Conheça o Instituto Magister em Teresina. Agende uma visita guiada para sua família.",
  keywords: [
    "Instituto Magister",
    "Escola em Teresina",
    "Melhores escolas Teresina",
    "Educação Infantil Teresina",
    "Ensino Fundamental Teresina",
    "Ensino Médio ENEM Teresina",
    "Matrículas 2026 Teresina",
  ],
  authors: [{ name: "Instituto Magister de Ensino" }],
  openGraph: {
    title: "Instituto Magister de Ensino | Matrículas Abertas em Teresina",
    description:
      "Onde o acolhimento transforma o aprendizado e o futuro acontece. Agende uma visita pedagógica guiada.",
    url: "https://magisterteresina.com.br",
    siteName: "Instituto Magister de Ensino",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Instituto Magister de Ensino",
    "alternateName": "Colégio Magister",
    "url": "https://magisterteresina.com.br",
    "logo": "https://magisterteresina.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Teresina",
      "addressRegion": "PI",
      "addressCountry": "BR"
    },
    "telephone": "+55-86-3232-1500",
    "priceRange": "$$",
    "description": "Instituição de ensino da Educação Infantil ao Ensino Médio e Pré-Vestibular com alta performance no ENEM em Teresina, Piauí."
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
