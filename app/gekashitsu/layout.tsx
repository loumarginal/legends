import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gekashitsu, The Surgery Room - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Gekashitsu, The Surgery Room light novel en PDF y EPUB formato.",
  keywords: [
    "Gekashitsu, The Surgery Room",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Gekashitsu, The Surgery Room - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Gekashitsu, The Surgery Room light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/gekashitsu",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/gekashitsu.webp",
        width: 1200,
        height: 630,
        alt: "Gekashitsu, The Surgery Room - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gekashitsu, The Surgery Room - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Gekashitsu, The Surgery Room light novel en PDF y EPUB formato.",
    images: ["/gekashitsu.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/gekashitsu",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
