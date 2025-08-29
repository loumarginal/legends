import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comisiona tu Novela Ligera - Legends no Fansub",
  description:
    "Servicios de traducción profesional del japonés al español para novelas ligeras, manga y novelas web. Obtén traducciones de alta calidad con contexto cultural y fluidez natural. Desde $30.",
  keywords: [
    "Servicio de traducción",
    "traducción de novelas ligeras",
    "traducción de japonés a español",
    "traductor profesional",
    "traducción por encargo",
  ],
  openGraph: {
    title: "Servicios de Traducción Profesional - Comisiones de Novelas Ligeras",
    description:
      "Servicios de traducción profesional del japonés al español para novelas ligeras y manga. Obtén traducciones de alta calidad con contexto cultural y fluidez natural. Desde $30.",
    url: "https://legnnovels.com/comisiones",
    siteName: "Legends no Fansub",
    images: [
      {
        url: "/og-comisiones.webp",
        width: 1200,
        height: 630,
        alt: "Legends no Fansub - Servicios de Traducción por Encargo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Traducción Profesional - Comisiones de Novelas Ligeras",
    description: "Servicios de traducción profesional del japonés al español para novelas ligeras y manga.",
    images: ["/og-comisiones.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/comisiones",
  },
}

export default function CommissionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
