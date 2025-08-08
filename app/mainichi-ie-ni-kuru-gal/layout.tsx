import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai - Descargar Light Novel en PDF & EPUB",
  description:
    "Descargar Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai light novel en PDF y EPUB formats.",
  keywords: [
    "Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai",
    "Descargar Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai",
    "PDF",
    "EPUB",
    "traducción de novelas ligeras japonesas",
    "La chica gal que viene a mi casa todos los días no tiene límites pero no es amable!",
    "毎日家に来るギャルが距離感ゼロでも優しくない",
  ],
  openGraph: {
    title: "Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai - Descargar Light Novel PDF & EPUB",
    description:
      "Descargar Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai light novel en PDF y EPUB formats.",
    url: "https://gashaworld.club/mainichi-ie-ni-kuru-gal",
    siteName: "Gashadokai",
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
    title: "Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai - Descargar Light Novel PDF & EPUB",
    description: "Descargar Mainichi Ie ni Kuru Gal ga Kyorikan Zero Demo Yasashiku nai light novel en PDF y EPUB formats.",
    images: ["/og-gal.webp"],
  },
  alternates: {
    canonical: "https://gashaworld.club/mainichi-ie-ni-kuru-gal",
  },
}

export default function MainichiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
