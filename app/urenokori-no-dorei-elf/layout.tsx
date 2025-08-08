import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita - Descargar Light Novel en PDF & EPUB",
  description:
    "Descargar Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita light novel en PDF y EPUB formato.",
  keywords: [
    "Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita",
    "light novel descargar",
    "PDF",
    "EPUB",
    "fantasy novel",
    "slice of life",
    "Japanese light novel translation",
    "売れ残りの奴隷エルフを拾ったので、娘にすることにした",
  ],
  openGraph: {
    title: "Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita - Descargar Light Novel PDF & EPUB",
    description:
      "Descargar Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita light novel en PDF y EPUB formatos.",
    url: "https://gashaworld.club/urenokori-no-dorei-elf",
    siteName: "Gashadokai",
    images: [
      {
        url: "/og-elf.webp",
        width: 1200,
        height: 630,
        alt: "Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita - Light Novel",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita - Descargar Light Novel PDF & EPUB",
    description: "Descargar Urenokori no Dorei Elf o Hirotta no de, Musume ni Suru Koto ni shita light novel en PDF y EPUB formatos.",
    images: ["/og-elf.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/urenokori-no-dorei-elf",
  },
}

export default function UrenokoriNoDoreiElfLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
