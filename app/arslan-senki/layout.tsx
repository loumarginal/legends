import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arslan Senki - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Arslan Senki light novel en PDF y EPUB formato.",
  keywords: [
    "Arslan Senki",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Arslan Senki - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Arslan Senki light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/arslan-senki",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/og-arslan.webp",
        width: 1200,
        height: 630,
        alt: "Arslan Senki - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Senki - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Arslan Senki light novel en PDF y EPUB formato.",
    images: ["/og-arslan.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/arslan-senki",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
