import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sangetsuki, The Moon Over the Mountain - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Sangetsuki, The Moon Over the Mountain light novel en PDF y EPUB formato.",
  keywords: [
    "Sangetsuki, The Moon Over the Mountain",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Sangetsuki, The Moon Over the Mountain - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Sangetsuki, The Moon Over the Mountain light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/sangetsuki",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/sangetsuki.webp",
        width: 1200,
        height: 630,
        alt: "Sangetsuki, The Moon Over the Mountain - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangetsuki, The Moon Over the Mountain - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Sangetsuki, The Moon Over the Mountain light novel en PDF y EPUB formato.",
    images: ["/sangetsuki.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/sangetsuki",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
