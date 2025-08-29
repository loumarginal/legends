import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gyofukuki, The Girl Who Became a Fish - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Gyofukuki, The Girl Who Became a Fish light novel en PDF y EPUB formato.",
  keywords: [
    "Gyofukuki, The Girl Who Became a Fish",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Gyofukuki, The Girl Who Became a Fish - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Gyofukuki, The Girl Who Became a Fish light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/gyofukuki",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/gyofukuki.webp",
        width: 1200,
        height: 630,
        alt: "Gyofukuki, The Girl Who Became a Fish - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyofukuki, The Girl Who Became a Fish - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Gyofukuki, The Girl Who Became a Fish light novel en PDF y EPUB formato.",
    images: ["/gyofukuki.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/gyofukuki",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
