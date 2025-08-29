import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta light novel en PDF y EPUB formato.",
  keywords: [
    "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela ligera vida escolar",
  ],
  openGraph: {
    title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta light novel en PDF y EPUB formato.",
    url: "https://gashaworld.club/kurasu-no-daikirai",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/og-kurasu.webp",
        width: 1200,
        height: 630,
        alt: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Kurasu no Daikirai na Joshi to Kekkon Suru Koto ni Natta light novel en PDF y EPUB formato.",
    images: ["/og-kurasu.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/kurasu-no-daikirai",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
