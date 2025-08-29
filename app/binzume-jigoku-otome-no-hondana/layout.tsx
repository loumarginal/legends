import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Binzume Jigoku Otome no Hondana, Hell in a Bottle light novel en PDF y EPUB formato.",
  keywords: [
    "Binzume Jigoku Otome no Hondana",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Binzume Jigoku Otome no Hondana, Hell in a Bottle light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/binzume-jigoku-otome-no-hondana",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/binzume.webp",
        width: 1200,
        height: 630,
        alt: "Binzume Jigoku Otome no Hondana, Hell in a Bottle - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binzume Jigoku Otome no Hondana, Hell in a Bottle - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Binzume Jigoku Otome no Hondana, Hell in a Bottle light novel en PDF y EPUB formato.",
    images: ["/binzume.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.coms/binzume-jigoku-otome-no-hondana",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
