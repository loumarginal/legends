import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tantei wa Mou, Shindeiru - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Tantei wa Mou, Shindeiru light novel en PDF y EPUB formato.",
  keywords: [
    "Tantei wa Mou, Shindeiru",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela ligera vida escolar",
  ],
  openGraph: {
    title: "Tantei wa Mou, Shindeiru - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Tantei wa Mou, Shindeiru light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/tantei-wa-mou",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/og-tantei.webp",
        width: 1200,
        height: 630,
        alt: "Tantei wa Mou, Shindeiru - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tantei wa Mou, Shindeiru - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Tantei wa Mou, Shindeiru light novel en PDF y EPUB formato.",
    images: ["/og-tantei.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/tantei-wa-mou",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
