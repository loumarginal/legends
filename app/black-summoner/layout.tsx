import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Black Summoner - Descargar Light Novel en PDF & EPUB",
  description:
    "Descargar Black Summoner light novel en PDF y EPUB formats.",
  keywords: [
    "Black Summoner",
    "Descargar Black Summoner",
    "PDF",
    "EPUB",
    "traducción de novelas ligeras japonesas",
  ],
  openGraph: {
    title: "Black Summoner - Descargar Light Novel PDF & EPUB",
    description:
      "Descargar Black Summoner light novel en PDF y EPUB formats.",
    url: "https://gashaworld.club/black-summoner",
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
    title: "Black Summoner - Descargar Light Novel PDF & EPUB",
    description: "Descargar Black Summoner light novel en PDF y EPUB formats.",
    images: ["/og-gal.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/black-summoner",
  },
}

export default function BlackSummonerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
