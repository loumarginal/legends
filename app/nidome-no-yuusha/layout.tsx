import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu light novel en PDF y EPUB formato.",
  keywords: [
    "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela ligera vida escolar",
  ],
  openGraph: {
    title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/nidome-no-yuusha",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/nidome.webp",
        width: 1200,
        height: 630,
        alt: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Nidome no Yuusha wa Fukushuu no Michi wo Warai Ayumu light novel en PDF y EPUB formato.",
    images: ["/nidome.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/nidome-no-yuusha",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
