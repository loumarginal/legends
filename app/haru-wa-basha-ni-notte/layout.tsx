import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Haru wa Basha ni Notte, Spring Comes Riding in a Carriage light novel en PDF y EPUB formato.",
  keywords: [
    "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Haru wa Basha ni Notte, Spring Comes Riding in a Carriage light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/haru-wa-basha-ni-notte",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/haru.webp",
        width: 1200,
        height: 630,
        alt: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haru wa Basha ni Notte, Spring Comes Riding in a Carriage - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Haru wa Basha ni Notte, Spring Comes Riding in a Carriage light novel en PDF y EPUB formato.",
    images: ["/haru.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/haru-wa-basha-ni-notte",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
