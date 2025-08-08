import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wall of Love - Gasha Club | Gashadokai",
  description:
    "Conoce a nuestros increíbles supporters del Gasha Club que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Gasha Club desde $5/mes y apoya traducciones de calidad.",
  keywords: [
    "Gasha Club",
    "Patreon supporters",
    "light novel translation support",
    "translation funding",
    "community supporters",
  ],
  openGraph: {
    title: "Wall of Love - Gasha Club | Gashadokai",
    description:
      "Conoce a nuestros increíbles supporters del Gasha Club que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Gasha Club desde $5/mes y apoya traducciones de calidad.",
    url: "https://gashaworld.club/wall-of-love",
    siteName: "Gashadokai",
    images: [
      {
        url: "/og-wall.webp",
        width: 1200,
        height: 630,
        alt: "Wall of Love - Gasha Club",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of Love - Gasha Club | Gashadokai",
    description: "Conoce a nuestros increíbles supporters del Gasha Club que ayudan a financiar nuestros proyectos de traducción de novelas ligeras. Únete al Gasha Club desde $5/mes y apoya traducciones de calidad.",
    images: ["/og-wall.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/wall-of-love",
  },
}

export default function WallOfLoveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
