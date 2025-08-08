import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan - Descargar Light Novel en PDF & EPUB",
  description:
    "Descargar Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan light novel en PDF y EPUB formats.",
  keywords: [
    "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan",
    "Descargar Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan",
    "PDF",
    "EPUB",
    "traducción de novelas ligeras japonesas",
  ],
  openGraph: {
    title: "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan - Descargar Light Novel PDF & EPUB",
    description:
      "Descargar Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan light novel en PDF y EPUB formats.",
    url: "https://gashaworld.club/fushisha-no-deshi",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/og-gal.webp",
        width: 1200,
        height: 630,
        alt: "Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai - Light Novel",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan - Descargar Light Novel PDF & EPUB",
    description: "Descargar Fushisha no Deshi: Jashin no Fukyou wo Katte Naraku ni Otosareta Ore no Eiyuutan light novel en PDF y EPUB formats.",
    images: ["/og-gal.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/fushisha-no-deshi",
  },
}

export default function FushishaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
