import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case light novel en PDF y EPUB formato.",
  keywords: [
    "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela ligera vida escolar",
  ],
  openGraph: {
    title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/natsunagi-nagisa-wa-mada",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/natsunagi.webp",
        width: 1200,
        height: 630,
        alt: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Natsunagi Nagisa wa Mada, Joshi Kousei de Itai. Tantei wa Mou, Shindeiru. Ordinary Case light novel en PDF y EPUB formato.",
    images: ["/natsunagi.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/natsunagi-nagisa-wa-mada",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
