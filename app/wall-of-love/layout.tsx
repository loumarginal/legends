import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wall of Love - Legends no Fansub",
  description:
    "Conoce a nuestros increíbles supporters del Legends no Fansub que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Legends no Fansub desde $5/mes y apoya traducciones de calidad.",
  keywords: [
    "Legends no Fansub",
    "Patreon supporters",
    "light novel translation support",
    "translation funding",
    "community supporters",
  ],
  openGraph: {
    title: "Wall of Love - Legends no Fansub",
    description:
      "Conoce a nuestros increíbles supporters del Legends no Fansub que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Legends no Fansub desde $5/mes y apoya traducciones de calidad.",
    url: "https://legnnovels.com/wall-of-love",
    siteName: "Legends no Fansub",
    images: [
      {
        url: "/og-wall.webp",
        width: 1200,
        height: 630,
        alt: "Wall of Love - Legends no Fansub",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of Love - Legends no Fansub",
    description: "Conoce a nuestros increíbles supporters del Legends no Fansub que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Legends no Fansub desde $5/mes y apoya traducciones de calidad.",
    images: ["/og-wall.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/wall-of-love",
  },
}

export default function WallOfLoveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
